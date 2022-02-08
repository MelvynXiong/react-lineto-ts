import React from 'react';

interface Props {
  children: any;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  top: string;
  left: string;
  color: string;
  className?: string;
}
export default function Block({
  top,
  left,
  color,
  className,
  onMouseOver,
  onMouseOut,
  children,
}: Props) {
  const style = { top, left, backgroundColor: color };
  return (
    <div
      className={`block ${className}`}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </div>
  );
}
