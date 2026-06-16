import React, { useEffect, useState } from 'react';
import { DAYS, SUBJECTS } from '../../data';

export default function NotificationManager() {
  const [permission, setPermission] = useState(() => {
    return 'Notification' in window ? Notification.permission : 'denied';
  });
  const [notifiedBlocks, setNotifiedBlocks] = useState(() => {
    try {
      const saved = localStorage.getItem('studyPlannerNotified');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  const requestPermission = () => {
    if (!('Notification' in window)) return;
    Notification.requestPermission().then(perm => {
      setPermission(perm);
    });
  };

  useEffect(() => {
    localStorage.setItem('studyPlannerNotified', JSON.stringify([...notifiedBlocks]));
  }, [notifiedBlocks]);

  useEffect(() => {
    if (permission !== 'granted') return;

    const checkBlocks = () => {
      const todayDateObj = new Date();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const dateStr = `${todayDateObj.getDate()} ${monthNames[todayDateObj.getMonth()]}`;
      
      const currentDay = DAYS.find(d => d.date === dateStr);
      if (!currentDay) return;

      const now = new Date();
      
      const checkBlockArray = (blocks, typeLabel) => {
        if (!blocks) return;
        blocks.forEach(b => {
          const [startStr] = b.slot.split(/[-–]/);
          const periodMatch = b.slot.match(/(AM|PM)/);
          const period = periodMatch ? periodMatch[1] : 'AM';
          
          let [h, m] = startStr.trim().replace(/[^0-9:]/g, '').split(':').map(Number);
          if (period === 'PM' && h !== 12) h += 12;
          if (period === 'AM' && h === 12) h = 0;

          const blockTime = new Date();
          blockTime.setHours(h, m, 0, 0);

          const diffMs = blockTime.getTime() - now.getTime();
          
          // Fire notification if it's within 5 minutes of starting and hasn't been notified
          const blockId = `${currentDay.date}-${b.slot}-${b.subject || b.task}`;
          
          if (diffMs > 0 && diffMs <= 5 * 60 * 1000 && !notifiedBlocks.has(blockId)) {
            const subj = b.subject ? SUBJECTS[b.subject] : null;
            const title = `⚡ ${typeLabel} starts soon!`;
            const body = subj ? `${subj.label}: ${b.topics || b.task}` : (b.task || b.label);
            
            new Notification(title, { body });
            
            setNotifiedBlocks(prev => new Set(prev).add(blockId));
          }
        });
      };

      checkBlockArray(currentDay.deepBlocks, "Deep Work");
      checkBlockArray(currentDay.shallowBlocks, "Shallow/Review");
    };

    checkBlocks();
    const interval = setInterval(checkBlocks, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [permission, notifiedBlocks]);

  if (permission === 'default') {
    return (
      <button 
        onClick={requestPermission}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          background: 'var(--accent)',
          color: '#000',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '20px',
          fontWeight: 800,
          boxShadow: '0 4px 12px rgba(0,229,204,0.3)',
          cursor: 'pointer',
          zIndex: 100,
          fontFamily: 'var(--font-display)'
        }}
      >
        🔔 Enable Reminders
      </button>
    );
  }
  return null;
}
