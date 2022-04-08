import React from 'react';
import { SteppedLineToProps } from '../interface';
import { SteppedLine } from '..';
import usePoints from './usePoints';

export default function SteppedLineTo({
  from,
  to,
  fromAnchor,
  toAnchor,
  ...rest
}: SteppedLineToProps) {
  const [isActive, points] = usePoints({ from, to, fromAnchor, toAnchor });

  return isActive ? <SteppedLine {...points} {...rest} /> : null;
}
