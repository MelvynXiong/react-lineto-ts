import React, { useLayoutEffect, useMemo, useState } from 'react';
import { LineToProps, Anchor, LineCoordinates } from '../interface';
import { Line } from '..';
import { parseAnchor, findElement } from '../utils';

export default function LineTo({ from, to, within, fromAnchor, toAnchor, ...rest }: LineToProps) {
  const [originElement, setOriginElement] = useState<any>(null);
  const [targetElement, setTargetElement] = useState<any>(null);
  const finalFromAnchor = useMemo(() => {
    return parseAnchor(fromAnchor as Anchor);
  }, [fromAnchor]);
  const finalToAnchor = useMemo(() => {
    return parseAnchor(toAnchor as Anchor);
  }, [toAnchor]);

  const isActive = useMemo(() => {
    return originElement && targetElement;
  }, [originElement, targetElement]);

  const points = useMemo(() => {
    if (!isActive) return {} as LineCoordinates;

    const originBox = originElement!.getBoundingClientRect();
    const targetBox = targetElement!.getBoundingClientRect();
    const offsetParent = originElement.offsetParent;
    const boundingInfo = offsetParent.getBoundingClientRect();
    const styleInfo = window.getComputedStyle(offsetParent);
    const borderLeft = parseInt(styleInfo.borderLeftWidth.replace('px', ''));
    const borderTop = parseInt(styleInfo.borderTopWidth.replace('px', ''));

    let offsetX = window.pageXOffset;
    let offsetY = window.pageYOffset;

    if (within) {
      const obj = findElement(within);
      const container = obj!.getBoundingClientRect();

      offsetX -=
        container.left +
        (window.pageXOffset || document.documentElement.scrollLeft) -
        obj!.scrollLeft;
      offsetY -=
        container.top + (window.pageYOffset || document.documentElement.scrollTop) - obj!.scrollTop;
    }

    const x0 =
      originBox!.left +
      originBox!.width * finalFromAnchor.x +
      offsetX -
      boundingInfo.left -
      borderLeft;
    const x1 =
      targetBox!.left +
      targetBox!.width * finalToAnchor.x +
      offsetX -
      boundingInfo.left -
      borderLeft;
    const y0 =
      originBox!.top +
      originBox!.height * finalFromAnchor.y +
      offsetY -
      boundingInfo.top -
      borderTop;
    const y1 =
      targetBox!.top + targetBox!.height * finalToAnchor.y + offsetY - boundingInfo.top - borderTop;

    return { x0, y0, x1, y1 };
  }, [finalFromAnchor, finalToAnchor, originElement, targetElement, isActive]);

  useLayoutEffect(() => {
    setOriginElement(findElement(from));
    setTargetElement(findElement(to));
  }, []);

  return isActive ? <Line {...points} {...rest} /> : null;
}
