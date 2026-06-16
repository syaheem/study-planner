import React, { useState, useEffect } from 'react';
import { DAYS, SUBJECTS } from './data';
import BottomNav from './components/UI/BottomNav';
import ScheduleTab from './components/Tabs/ScheduleTab';
import ScienceTab from './components/Tabs/ScienceTab';
import MatrixTab from './components/Tabs/MatrixTab';
import RoadmapTab from './components/Tabs/RoadmapTab';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('exam');
  const [dayIdx, setDayIdx] = useState(() => {
    const idx = DAYS.findIndex(d => d.today);
    return idx !== -1 ? idx : 0;
  });
  const [doneTasks, setDoneTasks] = useState(new Set());

  // Change background based on tab
  const bgMap = {
    exam:     'assets/bg_schedule.png',
    neuro:    'assets/bg_science.png',
    subjects: 'assets/bg_matrix.png',
    roadmap:  'assets/bg_roadmap.png',
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bgMap[activeTab]}')`;
  }, [activeTab]);

  const toggleDone = (id) => {
    setDoneTasks(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const nextExam = Object.values(SUBJECTS).reduce((a, b) => a.daysLeft < b.daysLeft ? a : b);

  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <div>
            <span className="header-eyebrow">Syaheem · IIUM CS · Jun–Jul 2026</span>
            <h1 className="header-title">Study & Career Planner</h1>
          </div>
          {nextExam && (
            <div className="header-badge">
              ⚡ {nextExam.daysLeft}d to {nextExam.short}
            </div>
          )}
        </div>
      </header>

      <main className="main-content">
        {activeTab === 'exam'     && <ScheduleTab dayIdx={dayIdx} setDayIdx={setDayIdx} doneTasks={doneTasks} toggleDone={toggleDone} />}
        {activeTab === 'neuro'    && <ScienceTab />}
        {activeTab === 'subjects' && <MatrixTab />}
        {activeTab === 'roadmap'  && <RoadmapTab />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}
