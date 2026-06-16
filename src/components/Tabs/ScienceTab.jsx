import React, { useState } from 'react';
import { NEURO_PRINCIPLES } from '../../data';

export default function NeuroTab() {
  const [activeNodeId, setActiveNodeId] = useState(1);
  const activeNode = NEURO_PRINCIPLES.find(p => p.id === activeNodeId);

  return (
    <div className="anim-fade-up">
      <div className="glass mb-20" style={{ padding: '22px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff', marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
          Circadian Alertness Cycle
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          Align subject difficulty with your hormonal peaks to optimize memory formation and retention.
        </p>
      </div>

      <div className="neuro-timeline stagger">
        <div className="neuro-timeline-line"></div>
        {NEURO_PRINCIPLES.map(node => {
          const isActive = activeNodeId === node.id;
          return (
            <div 
              key={node.id}
              className={`neuro-node ${isActive ? 'active' : ''}`}
              onClick={() => setActiveNodeId(node.id)}
            >
              <div 
                className="neuro-node-circle"
                dangerouslySetInnerHTML={{ __html: node.icon }}
              ></div>
              <div className="neuro-node-label">{node.time.split('–')[0]}</div>
            </div>
          );
        })}
      </div>

      <div className="glass stagger" style={{ animationDelay: '0.1s', padding: '24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
          <span style={{ fontSize: '120px' }} dangerouslySetInnerHTML={{ __html: activeNode.icon }}></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '24px' }} dangerouslySetInnerHTML={{ __html: activeNode.icon }}></span>
          <div>
            <h3 style={{ fontSize: '15px', color: '#fff', fontWeight: 800 }}>{activeNode.title}</h3>
            <span style={{ fontSize: '12px', color: 'var(--cyan)', fontWeight: 700 }}>{activeNode.time}</span>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          {activeNode.desc}
        </p>
      </div>

      <h3 className="fs-12 fw-800 uppercase col-muted mb-16 mt-20 stagger" style={{ animationDelay: '0.2s' }}>All Principles</h3>
      <div className="grid-tablet-2 stagger" style={{ animationDelay: '0.25s' }}>
        {NEURO_PRINCIPLES.map(p => (
          <div key={p.id} className="neuro-principle-card glass mb-12">
            <div className="neuro-principle-icon-wrap" dangerouslySetInnerHTML={{ __html: p.icon }}></div>
            <div>
              <h4 style={{ fontSize: '13px', color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{p.title}</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
