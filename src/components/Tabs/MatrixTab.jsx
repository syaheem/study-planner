import React from 'react';
import { SUBJECTS, PRIORITY_STYLE } from '../../data';
import Badge from '../UI/Badge';

export default function MatrixTab() {
  const sorted = Object.entries(SUBJECTS).sort(([,a],[,b]) => a.daysLeft - b.daysLeft);

  return (
    <div className="anim-fade-up">
      {/* Header */}
      <div className="glass stagger" style={{ padding: '20px', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
          Academic Priority Matrix
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Exam dates, credit weights, and study progress per subject.
        </p>
      </div>

      {sorted.map(([key, s], i) => {
        const p = PRIORITY_STYLE[s.priority];
        return (
          <div key={key} className="subject-card stagger" style={{ marginBottom: '12px', animationDelay: `${i * 0.06}s` }}>
            {/* Top colour bar */}
            <div className="subject-card-glow" style={{ background: s.color }}></div>

            <div className="subject-card-head">
              <div className="subject-card-info">
                <div className="subject-card-icon">{s.icon}</div>
                <div>
                  <div className="subject-card-name">{s.label}</div>
                  <div className="subject-card-sub">{s.exam} · {s.ch} CH</div>
                </div>
              </div>
              <Badge background={p.bg} color={p.color}>{p.label}</Badge>
            </div>

            <div className="subject-stats">
              <div>
                <div className="subject-stat-label">Days Left</div>
                <div className="subject-stat-value" style={{ color: s.daysLeft <= 3 ? 'var(--red)' : s.daysLeft <= 7 ? 'var(--yellow)' : 'var(--cyan)' }}>{s.daysLeft}</div>
              </div>
              <div>
                <div className="subject-stat-label">Sessions</div>
                <div className="subject-stat-value" style={{ color: 'var(--accent)' }}>{s.sessions}</div>
              </div>
              <div>
                <div className="subject-stat-label">Credits</div>
                <div className="subject-stat-value" style={{ color: '#fff' }}>{s.ch}</div>
              </div>
              <div>
                <div className="subject-stat-label">Priority</div>
                <div className="subject-stat-value" style={{ color: p.color }}>{p.label}</div>
              </div>
            </div>

            <div className="subject-progress-head">
              <span style={{ color: 'var(--text-muted)' }}>Study Progress</span>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>0%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '0%', background: s.color }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
