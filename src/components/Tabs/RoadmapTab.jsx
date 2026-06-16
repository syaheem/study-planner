import React, { useState } from 'react';
import { PHASES } from '../../data';

export default function RoadmapTab() {
  const [activePhase, setActivePhase] = useState(0);
  const ph = PHASES[activePhase];

  return (
    <div className="anim-fade-up">
      <div className="glass mb-20" style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
          Career Roadmap
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Strategic path: IIUM CS graduate → high-income software engineering (Jul 2026 – Dec 2027).
        </p>
      </div>

      <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingBottom: '12px', marginBottom: '16px', WebkitOverflowScrolling: 'touch' }} className="stagger">
        {PHASES.map((p, idx) => {
          const isActive = activePhase === idx;
          return (
            <button
              key={idx}
              className={`phase-btn ${isActive ? 'active' : ''}`}
              style={isActive ? { borderBottomColor: p.color, background: 'rgba(255,255,255,0.05)' } : {}}
              onClick={() => setActivePhase(idx)}
            >
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                {p.date}
              </div>
              <div style={{ fontSize: '13px', color: isActive ? '#fff' : 'var(--text-secondary)', fontWeight: 800 }}>
                {p.title}
              </div>
            </button>
          );
        })}
      </div>

      <div className="glass stagger" style={{ animationDelay: '0.1s', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: ph.color, background: ph.color + '15', marginBottom: '12px' }}>
              {ph.date}
            </span>
            <h3 className="fw-800 fs-17 col-white font-display">{ph.title}</h3>
          </div>
          <div style={{ background: 'rgba(0,229,204,0.06)', border: '1px solid rgba(0,229,204,0.15)', borderRadius: 'var(--r-sm)', padding: '10px 14px', textAlign: 'right' }}>
            <div style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>Target</div>
            <div style={{ fontSize: '16px', color: 'var(--cyan)', fontWeight: 900, fontFamily: 'var(--font-display)' }}>{ph.income}</div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Strategic Focus</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: '1.65' }}>{ph.focus}</p>
        </div>

        <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Milestones</h4>
        <div className="flex flex-col gap-12">
          {ph.milestones.map((m, idx) => (
            <div key={idx} className="phase-milestone">
              <div className="phase-milestone-num" style={{ color: ph.color, background: ph.color + '15' }}>{idx + 1}</div>
              <span className="fs-13 lh-16 col-secondary">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
