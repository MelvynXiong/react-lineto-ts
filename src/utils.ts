import { DEFAULT_ANCHOR } from './cons';
import { Anchor } from './interface';

export function parseAnchorPercent(value: string) {
  const percent = parseFloat(value) / 100;
  if (isNaN(percent) || !isFinite(percent)) {
    throw new Error(`LinkTo could not parse percent value "${value}"`);
  }
  return percent;
}

export function parseAnchorText(value: string) {
  // Try to infer the relevant axis.
  switch (value) {
    case 'top':
      return { y: 0 };
    case 'left':
      return { x: 0 };
    case 'middle':
      return { y: 0.5 };
    case 'center':
      return { x: 0.5 };
    case 'bottom':
      return { y: 1 };
    case 'right':
      return { x: 1 };
  }
  return null;
}

export function parseAnchor(value: Anchor) {
  if (!value) {
    return DEFAULT_ANCHOR;
  }
  const parts = value.split(' ');
  if (parts.length > 2) {
    throw new Error('LinkTo anchor format is "<x> <y>"');
  }
  const [x, y] = parts;
  return Object.assign(
    {},
    DEFAULT_ANCHOR,
    x ? parseAnchorText(x) || { x: parseAnchorPercent(x) } : {},
    y ? parseAnchorText(y) || { y: parseAnchorPercent(y) } : {}
  );
}

export function findElement(className: string) {
  return document.querySelector(`.${className}`);
}
