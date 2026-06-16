import React, { useState, useEffect } from 'react';

export default function CountdownBadge({ exam }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!exam) return;
    
    // Parse the exam date string: "18 Jun, 2:30 PM"
    // Assuming year is 2026 based on the context
    const dateStr = exam.exam.replace(',', '') + ' 2026';
    const target = new Date(dateStr).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft('EXAM DAY');
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${d}d ${h}h ${m}m`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [exam]);

  if (!exam) return null;

  return (
    <div className="header-badge" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px', textAlign: 'right' }}>
      <div style={{ fontSize: '10px', opacity: 0.8 }}>⚡ NEXT: {exam.short}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>{timeLeft}</div>
    </div>
  );
}
