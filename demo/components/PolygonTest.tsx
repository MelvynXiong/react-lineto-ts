import React, { Component } from 'react';
import { Line } from '../../src';

export default function PolygonTest() {
  function makeShape(x, y, n, initialAngle) {
    const elems = [];
    const lineLength = 100;
    const angle = Math.PI - Math.PI / n;

    let x0 = x;
    let y0 = y;

    for (let i = 0, theta = initialAngle; i < n; i += 1, theta += angle) {
      const x1 = x0 + lineLength * Math.cos(theta);
      const y1 = y0 + lineLength * Math.sin(theta);
      elems.push(<Line key={i} x0={x0} y0={y0} x1={x1} y1={y1} />);
      x0 = x1;
      y0 = y1;
    }
    return elems;
  }

  const triangle = makeShape(80, 75, 3, Math.PI / 3);
  const star = makeShape(150, 105, 5, 0);
  const ngon = makeShape(280, 85, 7, Math.PI / 7);

  return (
    <fieldset id="polygon-test">
      <legend>Polygon Test</legend>
      Demonstrate how to draw absolutely positioned line segments.
      {triangle}
      {star}
      {ngon}
    </fieldset>
  );
}
