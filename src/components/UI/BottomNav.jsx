import React from 'react';
import { TABS } from '../../data';

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="bottom-nav">
      {TABS.map((t, idx) => {
        const isActive = activeTab === t.id;
        return (
          <button
            key={t.id}
            className={`nav-btn ${isActive ? 'active' : ''} stagger`}
            style={{ animationDelay: `${idx * 0.05}s` }}
            onClick={() => onTabChange(t.id)}
          >
            <span className="nav-btn-icon" dangerouslySetInnerHTML={{ __html: t.icon }}></span>
            <span className="nav-btn-label">{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
