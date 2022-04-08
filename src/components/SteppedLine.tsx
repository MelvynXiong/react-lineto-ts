import React, { PureComponent } from 'react';
import { SteppedLineProps } from '../interface';
import { Line } from '..';
import { DEFAULT_BORDER_WIDTH } from '../cons';

export default function SteppedLine({
  x0,
  x1,
  y0,
  y1,
  orientation,
  borderWidth,
  ...rest
}: SteppedLineProps) {
  const newX0 = Math.round(x0);
  const newY0 = Math.round(y0);
  const newX1 = Math.round(x1);
  const newY1 = Math.round(y1);

  function renderVertical() {
    const dx = newX1 - newX0;
    if (Math.abs(dx) <= 1) {
      return (
        <Line {...rest} x0={newX0} y0={newY0} x1={newX0} y1={newY1} borderWidth={borderWidth} />
      );
    }

    const newBorderWidth = borderWidth || DEFAULT_BORDER_WIDTH;
    const y2 = Math.round((newY0 + newY1) / 2);

    const minX = Math.min(newX0, newX1) - newBorderWidth / 2;
    const maxX = Math.max(newX0, newX1) + newBorderWidth / 2;

    return (
      <>
        <Line {...rest} borderWidth={borderWidth} x0={newX0} y0={newY0} x1={newX0} y1={y2} />
        <Line {...rest} borderWidth={borderWidth} x0={newX1} y0={newY1} x1={newX1} y1={y2} />
        <Line {...rest} borderWidth={borderWidth} x0={minX} y0={y2} x1={maxX} y1={y2} />
      </>
    );
  }

  function renderHorizontal() {
    const dy = newY1 - newY0;

    if (Math.abs(dy) <= 1) {
      return (
        <Line {...rest} x0={newX0} y0={newY0} x1={newX1} y1={newY0} borderWidth={borderWidth} />
      );
    }

    const newBorderWidth = borderWidth || DEFAULT_BORDER_WIDTH;
    const x2 = Math.round((newX0 + newX1) / 2);

    const minY = Math.min(newY0, newY1) - newBorderWidth / 2;
    const maxY = Math.max(newY0, newY1) + newBorderWidth / 2;

    return (
      <>
        <Line {...rest} borderWidth={borderWidth} x0={newX0} y0={newY0} x1={x2} y1={newY0} />
        <Line {...rest} borderWidth={borderWidth} x0={newX1} y0={newY1} x1={x2} y1={newY1} />
        <Line {...rest} borderWidth={borderWidth} x0={x2} y0={minY} x1={x2} y1={maxY} />
      </>
    );
  }

  return orientation === 'h' ? renderHorizontal() : renderVertical();
}
