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

  return (
    <div className="anim-fade-up">
      <div className="date-selector mb-20 stagger">
        {DAYS.map((d, idx) => (
          <button 
            key={idx}
            className={`date-btn ${idx === dayIdx ? 'active' : ''}`}
            onClick={() => setDayIdx(idx)}
          >
            <div className="date-btn-day">{d.day}</div>
            <div className="date-btn-date">{d.date.split(' ')[0]}</div>
            {d.today && <div className="date-btn-dot"></div>}
          </button>
        ))}
      </div>

      <div className="status-banner mb-24 stagger" style={{ animationDelay: '0.1s' }}>
        <div className="banner-bg"></div>
        <div className="banner-content flex justify-between items-center">
          <div>
            <h2 className="fs-18 fw-900 mb-4 font-display">
              {examSubject ? (
                <span dangerouslySetInnerHTML={{ __html: `${examSubject.icon} ${examSubject.label} — ${examSubject.exam.split(', ')[1] || ''}` }} />
              ) : (
                <><span dangerouslySetInnerHTML={{ __html: '📚' }} /> Strategic Study Day</>
              )}
            </h2>
            <p className="fs-12 col-secondary">
              {examSubject ? <span dangerouslySetInnerHTML={{ __html: '<i class="ph-bold ph-warning"></i> EXAM DAY' }} /> : 'Execute the plan. Trust the process.'}
            </p>
          </div>
          <div className="progress-circle-wrap">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray={`${dayPct}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="progress-text">{dayPct}%</div>
          </div>
        </div>
      </div>

      <h3 className="fs-12 fw-800 uppercase col-muted mb-16 stagger" style={{ animationDelay: '0.15s' }}>Deep Work Blocks</h3>
      <div className="grid-tablet-2 stagger" style={{ animationDelay: '0.2s' }}>
        {day.deepBlocks?.map((b, i) => {
          const id = `d${dayIdx}-deep-${i}`;
          const isDone = doneTasks.has(id);
          const subj = SUBJECTS[b.subject];
          const bs = BLOCK_STYLE[b.type];

          return (
            <div key={id} className={`task-card glass mb-12 ${isDone ? 'is-done' : ''}`} onClick={() => toggleDone(id)}>
              <div className="flex justify-between items-start mb-12">
                <div className="flex-1">
                  <div className="deep-meta">
                    <Badge extraClass="badge-deep" background={bs.border + '22'} color={bs.border}>
                      <span dangerouslySetInnerHTML={{ __html: `${bs.icon} ${bs.label}` }} />
                    </Badge>
                    <Badge extraClass="badge-subject" background={subj.color + '22'} color={subj.color}>
                      <span dangerouslySetInnerHTML={{ __html: `${subj.icon} ${subj.short}` }} />
                    </Badge>
                    <span className="fs-11 fw-700 col-muted">{b.slot}</span>
                  </div>
                  <h4 className="deep-topics">{b.topics}</h4>
                </div>
                <div className="check-box" dangerouslySetInnerHTML={{ __html: isDone ? '<i class="ph-bold ph-check"></i>' : '' }}></div>
              </div>
              <div className="deep-details">
                <div className="deep-detail-row">
                  <span className="col-muted fw-700">Why:</span>
                  <span className="col-secondary flex-1">{b.why}</span>
                </div>
                <div className="deep-detail-row">
                  <span className="col-muted fw-700">Strategy:</span>
                  <span className="col-secondary flex-1">{b.strategy}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="fs-12 fw-800 uppercase col-muted mb-16 mt-20 stagger" style={{ animationDelay: '0.25s' }}>Shallow & Review</h3>
      <div className="grid-tablet-2 stagger" style={{ animationDelay: '0.3s' }}>
        {day.shallowBlocks?.map((b, i) => {
          const id = `d${dayIdx}-shallow-${i}`;
          const isDone = doneTasks.has(id);
          const subj = SUBJECTS[b.subject];
          const bs = BLOCK_STYLE[b.type];

          return (
            <div key={id} className={`task-card glass mb-8 ${isDone ? 'is-done' : ''}`} onClick={() => toggleDone(id)}>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-8">
                    <span className="shallow-label" dangerouslySetInnerHTML={{ __html: `${bs.icon} ${b.label}` }} />
                    <Badge extraClass="badge-subject" background={subj.color + '22'} color={subj.color}>
                      <span dangerouslySetInnerHTML={{ __html: `${subj.icon} ${subj.short}` }} />
                    </Badge>
                  </div>
                  <div className="shallow-task">{b.task}</div>
                  <div className="shallow-time">{b.slot}</div>
                </div>
                <div className="check-box" dangerouslySetInnerHTML={{ __html: isDone ? '<i class="ph-bold ph-check"></i>' : '' }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
