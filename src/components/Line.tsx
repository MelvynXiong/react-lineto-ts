import React from 'react';
import { LineProps } from '../interface';
import { DEFAULT_BORDER_COLOR, DEFAULT_BORDER_STYLE, DEFAULT_BORDER_WIDTH } from '../cons';

export default function Line({
  x0,
  y0,
  x1,
  y1,
  borderColor,
  borderStyle,
  borderWidth,
  zIndex,
  className,
}: LineProps) {
  const dy = y1 - y0;
  const dx = x1 - x0;

  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const length = Math.sqrt(dx * dx + dy * dy);
  const defaultStyle = {
    borderTopColor: borderColor || DEFAULT_BORDER_COLOR,
    borderTopStyle: borderStyle || DEFAULT_BORDER_STYLE,
    borderTopWidth: borderWidth || DEFAULT_BORDER_WIDTH,
  };

  const offsetX = (defaultStyle.borderTopWidth / 2) * (dy / length);
  const offsetY = (defaultStyle.borderTopWidth / 2) * (dx / length);
  console.log(1, angle, offsetX);
  const positionStyle = {
    position: 'absolute',
    top: `${y0 - offsetY}px`,
    left: `${x0 + offsetX}px`,
    width: `${length}px`,
    zIndex: Number.isFinite(zIndex) ? String(zIndex) : '1',
    transform: `rotate(${angle}deg)`,
    // Rotate around (x0, y0)
    transformOrigin: '0 0',
  };

  return <div className={className} style={{ ...defaultStyle, ...positionStyle } as any} />;
}
