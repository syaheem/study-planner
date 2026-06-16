import React, { useState } from 'react';
import { PHASES } from '../../data';

export default function RoadmapTab() {
  const [activeIdx, setActiveIdx] = useState(0);
  const ph = PHASES[activeIdx];

  return (
    <div className="anim-fade-up">
      {/* Header */}
      <div className="glass stagger" style={{ padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
          Career Roadmap
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Strategic path: IIUM CS graduate → high-income software engineering (Jul 2026 – Dec 2027).
        </p>
      </div>

      {/* Phase buttons */}
      {PHASES.map((p, idx) => {
        const isActive = activeIdx === idx;
        return (
          <button
            key={p.id}
            className={`phase-btn stagger ${isActive ? 'active' : ''}`}
            style={{
              marginBottom: '10px',
              width: '100%',
              borderLeftColor: isActive ? p.color : 'transparent',
              borderLeftWidth: '3px',
              borderLeftStyle: 'solid',
              background: isActive ? 'rgba(255,255,255,0.04)' : undefined,
              animationDelay: `${idx * 0.06}s`,
            }}
            onClick={() => setActiveIdx(idx)}
          >
            <div className="phase-btn-left">
              <div className="phase-btn-dot" style={{ background: p.color }}></div>
              <div style={{ textAlign: 'left' }}>
                <div className="phase-btn-label" style={{ color: isActive ? '#fff' : 'var(--text-secondary)' }}>{p.title}</div>
                <div className="phase-btn-period">{p.period}</div>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: p.color, fontWeight: 800, fontFamily: 'var(--font-display)' }}>{p.income}</span>
          </button>
        );
      })}

      {/* Detail card */}
      <div className="phase-detail stagger" style={{ marginTop: '16px', borderLeftColor: ph.color, animationDelay: '0.3s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: ph.color, background: ph.color + '15', marginBottom: '8px' }}>
              {ph.period}
            </span>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-display)' }}>{ph.title}</h3>
          </div>
          <div style={{ background: 'rgba(0,229,204,0.06)', border: '1px solid rgba(0,229,204,0.15)', borderRadius: 'var(--r-sm)', padding: '10px 14px', textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>
            <div style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>Target</div>
            <div style={{ fontSize: '14px', color: 'var(--cyan)', fontWeight: 900, fontFamily: 'var(--font-display)' }}>{ph.income}</div>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Strategic Focus</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.65 }}>{ph.focus}</p>
        </div>

        <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Milestones</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ph.milestones.map((m, idx) => (
            <div key={idx} className="phase-milestone">
              <div className="phase-milestone-num" style={{ color: ph.color, background: ph.color + '15' }}>{idx + 1}</div>
              <span style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
