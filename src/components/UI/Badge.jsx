import React from 'react';

export default function Badge({ children, extraClass = '', background, color, style = {} }) {
  return (
    <span
      className={`badge ${extraClass}`}
      style={{ background, color, ...style }}
    >
      {children}
    </span>
  );
}
