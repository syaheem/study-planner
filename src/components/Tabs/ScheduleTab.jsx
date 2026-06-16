import React from 'react';
import { DAYS, SUBJECTS, BLOCK_STYLE } from '../../data';
import Badge from '../UI/Badge';

export default function ScheduleTab({ dayIdx, setDayIdx, doneTasks, toggleDone }) {
  const day = DAYS[dayIdx];
  const allBlocks = [
    ...(day.deepBlocks || []).map((_,i) => `d${dayIdx}-deep-${i}`),
    ...(day.shallowBlocks || []).map((_,i) => `d${dayIdx}-shallow-${i}`)
  ];
  const dayDone = allBlocks.filter(k => doneTasks.has(k)).length;
  const dayPct = allBlocks.length ? Math.round(dayDone / allBlocks.length * 100) : 100;
  const examSubject = day.examToday ? SUBJECTS[day.examToday] : null;

  // Overall progress across all days
  const total = DAYS.reduce((acc, d, dIdx) => {
    const all = [
      ...(d.deepBlocks || []).map((_,i) => `d${dIdx}-deep-${i}`),
      ...(d.shallowBlocks || []).map((_,i) => `d${dIdx}-shallow-${i}`)
    ];
    acc.done += all.filter(k => doneTasks.has(k)).length;
    acc.total += all.length;
    return acc;
  }, { done: 0, total: 0 });
  const overallPct = total.total ? Math.round(total.done / total.total * 100) : 0;

  return (
    <div className="anim-fade-up">
      {/* Overall progress */}
      <div className="overall-progress-bar stagger">
        <span className="overall-progress-label">📅 Season Progress</span>
        <div className="progress-track" style={{ flex: 1 }}>
          <div className="progress-fill" style={{ width: `${overallPct}%` }}></div>
        </div>
        <span className="overall-progress-pct">{overallPct}%</span>
      </div>

      {/* Day selector */}
      <div className="day-scroller stagger" style={{ animationDelay: '0.05s' }}>
        {DAYS.map((d, idx) => (
          <button
            key={idx}
            className={`day-pill ${idx === dayIdx ? 'active' : ''}`}
            onClick={() => setDayIdx(idx)}
          >
            <div className="day-name">{d.day}</div>
            <div className="day-date">{d.date.split(' ')[0]}</div>
            {d.today && <div className="dot-today"></div>}
            {d.examToday && !d.today && <div className="dot-exam"></div>}
          </button>
        ))}
      </div>

      {/* Status banner */}
      <div className={`status-banner stagger ${examSubject ? 'exam-day' : 'study-day'}`} style={{ animationDelay: '0.1s' }}>
        <div>
          <div className="status-meta">{day.date}</div>
          <div className="status-title">
            {examSubject
              ? <><span>{examSubject.icon}</span> {examSubject.label} — EXAM DAY</>
              : <><span>📚</span> Strategic Study Day</>
            }
          </div>
          {day.tip && <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.5 }}>{day.tip}</p>}
        </div>
        <div className="progress-ring">
          <div className="progress-count">{dayPct}%</div>
          <div className="progress-text">{dayDone}/{allBlocks.length} done</div>
          <div className="progress-track-sm">
            <div className="progress-fill" style={{ width: `${dayPct}%` }}></div>
          </div>
        </div>
      </div>

      {/* Deep work blocks */}
      {day.deepBlocks && day.deepBlocks.length > 0 && (
        <>
          <h3 className="section-heading stagger" style={{ animationDelay: '0.15s' }}>
            <span className="section-heading-icon">🧠</span>
            <span className="section-heading-text">Deep Work Blocks</span>
          </h3>
          {day.deepBlocks.map((b, i) => {
            const id = `d${dayIdx}-deep-${i}`;
            const isDone = doneTasks.has(id);
            const subj = SUBJECTS[b.subject];
            const bs = BLOCK_STYLE[b.type] || BLOCK_STYLE.deep;

            return (
              <div
                key={id}
                className={`task-card stagger ${isDone ? 'is-done' : ''}`}
                style={{ flexDirection: 'column', borderLeftColor: bs.border, marginBottom: '12px', animationDelay: `${0.2 + i * 0.05}s` }}
                onClick={() => toggleDone(id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div className="deep-meta">
                    <Badge background={bs.border + '22'} color={bs.border}>{bs.icon} {bs.label}</Badge>
                    {subj && <Badge background={subj.color + '22'} color={subj.color}>{subj.icon} {subj.short}</Badge>}
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>{b.slot}</span>
                  </div>
                  <div className="check-box" style={isDone ? { background: 'var(--green)', borderColor: 'var(--green)', color: '#000' } : {}}>
                    {isDone && '✓'}
                  </div>
                </div>
                <div className="deep-topics">{b.topics}</div>
                <div className="deep-details">
                  <div className="deep-detail-row">
                    <span style={{ color: 'var(--text-muted)', fontWeight: 700, flexShrink: 0 }}>Why:</span>
                    <span style={{ color: 'var(--text-secondary)', flex: 1 }}>{b.why}</span>
                  </div>
                  <div className="deep-detail-row">
                    <span style={{ color: 'var(--text-muted)', fontWeight: 700, flexShrink: 0 }}>Strategy:</span>
                    <span style={{ color: 'var(--text-secondary)', flex: 1 }}>{b.strategy}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* Shallow blocks */}
      {day.shallowBlocks && day.shallowBlocks.length > 0 && (
        <>
          <h3 className="section-heading stagger" style={{ marginTop: '20px', animationDelay: '0.3s' }}>
            <span className="section-heading-icon">📝</span>
            <span className="section-heading-text">Shallow & Review</span>
          </h3>
          {day.shallowBlocks.map((b, i) => {
            const id = `d${dayIdx}-shallow-${i}`;
            const isDone = doneTasks.has(id);
            const subj = b.subject ? SUBJECTS[b.subject] : null;
            const bs = BLOCK_STYLE[b.type] || BLOCK_STYLE.shallow;

            return (
              <div
                key={id}
                className={`task-card stagger ${isDone ? 'is-done' : ''}`}
                style={{ borderLeftColor: bs.border, marginBottom: '8px', animationDelay: `${0.35 + i * 0.04}s` }}
                onClick={() => toggleDone(id)}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="shallow-label">{bs.icon} {b.label}</span>
                    {subj && <Badge background={subj.color + '22'} color={subj.color}>{subj.icon} {subj.short}</Badge>}
                  </div>
                  <div className="shallow-task">{b.task}</div>
                  <div className="shallow-time">{b.slot}</div>
                </div>
                <div className="check-box" style={isDone ? { background: 'var(--green)', borderColor: 'var(--green)', color: '#000' } : {}}>
                  {isDone && '✓'}
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* Day nav */}
      <div className="day-nav stagger" style={{ animationDelay: '0.5s' }}>
        <button className="day-nav-btn" disabled={dayIdx === 0} onClick={() => setDayIdx(dayIdx - 1)}>← Prev Day</button>
        <button className="day-nav-btn" disabled={dayIdx === DAYS.length - 1} onClick={() => setDayIdx(dayIdx + 1)}>Next Day →</button>
      </div>
    </div>
  );
}
