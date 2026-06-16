import React, { useState } from 'react';
import { NEURO_PRINCIPLES } from '../../data';

export default function ScienceTab() {
  const [activeId, setActiveId] = useState(1);
  const activeNode = NEURO_PRINCIPLES.find(p => p.id === activeId);

  return (
    <div className="anim-fade-up">
      {/* Header */}
      <div className="glass stagger" style={{ padding: '22px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff', marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
          Circadian Alertness Cycle
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Align subject difficulty with your hormonal peaks to optimize memory formation and retention.
        </p>
      </div>

      {/* Interactive timeline */}
      <div className="neuro-timeline stagger" style={{ animationDelay: '0.1s' }}>
        <div className="neuro-timeline-line"></div>
        <div className="neuro-nodes">
          {NEURO_PRINCIPLES.map(node => (
            <div
              key={node.id}
              className={`neuro-node ${activeId === node.id ? 'active' : ''}`}
              onClick={() => setActiveId(node.id)}
            >
              <div className="neuro-node-circle">{node.icon}</div>
              <div className="neuro-node-time">{node.time.split('–')[0].split(' ')[0]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Active detail card */}
      {activeNode && (
        <div className="neuro-detail-card stagger" style={{ animationDelay: '0.15s', position: 'relative', overflow: 'hidden', marginBottom: '24px' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.06, fontSize: '120px', pointerEvents: 'none' }}>
            {activeNode.icon}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '28px' }}>{activeNode.icon}</span>
            <div>
              <h3 style={{ fontSize: '15px', color: '#fff', fontWeight: 800 }}>{activeNode.title}</h3>
              <span style={{ fontSize: '12px', color: 'var(--cyan)', fontWeight: 700 }}>{activeNode.time}</span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{activeNode.desc}</p>
        </div>
      )}

      {/* All principles */}
      <h3 className="section-heading stagger" style={{ animationDelay: '0.2s' }}>
        <span className="section-heading-icon">🔬</span>
        <span className="section-heading-text">All Principles</span>
      </h3>
      {NEURO_PRINCIPLES.map((p, i) => (
        <div
          key={p.id}
          className="neuro-principle-card stagger"
          style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '10px', animationDelay: `${0.25 + i * 0.04}s`, cursor: 'pointer' }}
          onClick={() => setActiveId(p.id)}
        >
          <div className="neuro-principle-icon-wrap">{p.icon}</div>
          <div>
            <h4 style={{ fontSize: '13px', color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{p.title}</h4>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
