import React from 'react';
import { SUBJECTS, PRIORITY_STYLE } from '../../data';
import Badge from '../UI/Badge';

export default function MatrixTab() {
  const subjectStats = Object.entries(SUBJECTS).map(([key, value]) => ({ key, value }));
  // Sort by days left
  subjectStats.sort((a, b) => a.value.daysLeft - b.value.daysLeft);

  return (
    <div className="anim-fade-up">
      <div className="glass mb-16" style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
          Academic Priority Matrix
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Exam dates, credit weights, and study progress per subject.
        </p>
      </div>

      <div className="grid-tablet-2 stagger">
        {subjectStats.map(({ key, value }, i) => {
          const p = PRIORITY_STYLE[value.priority];
          return (
            <div key={key} className="subject-card glass mb-12" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex justify-between items-start mb-12">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span className="subject-card-icon" dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                  <div>
                    <h3 className="fs-14 fw-800 col-white">{value.label}</h3>
                    <div className="fs-11 col-muted mt-4">
                      {value.exam} • {value.ch} CH
                    </div>
                  </div>
                </div>
                <Badge background={p.bg} color={p.color}>{p.label}</Badge>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: 'var(--r-sm)' }}>
                  <div className="fs-10 fw-800 uppercase col-muted mb-4">Days Left</div>
                  <div style={{ fontSize: '16px', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-display)' }}>
                    {value.daysLeft}
                  </div>
                </div>
                <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: 'var(--r-sm)' }}>
                  <div className="fs-10 fw-800 uppercase col-muted mb-4">Sessions</div>
                  <div style={{ fontSize: '16px', fontWeight: 900, color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>
                    {value.sessions}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
