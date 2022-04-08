import React from 'react';
import { LineToProps } from '../interface';
import { Line } from '..';
import usePoints from './usePoints';

export default function LineTo({ from, to, fromAnchor, toAnchor, ...rest }: LineToProps) {
  const [isActive, points] = usePoints({ from, to, fromAnchor, toAnchor });

  return isActive ? <Line {...points} {...rest} /> : null;
}
