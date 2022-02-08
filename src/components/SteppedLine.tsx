import React, { PureComponent } from 'react';
import { SteppedLineProps } from '../interface';
import { Line } from '..';
import { DEFAULT_BORDER_WIDTH } from '../cons';

export default class SteppedLine extends PureComponent<SteppedLineProps> {
  render() {
    if (this.props.orientation === 'h') {
      return this.renderHorizontal();
    }
    return this.renderVertical();
  }

  renderVertical() {
    const x0 = Math.round(this.props.x0);
    const y0 = Math.round(this.props.y0);
    const x1 = Math.round(this.props.x1);
    const y1 = Math.round(this.props.y1);

    const dx = x1 - x0;
    if (Math.abs(dx) <= 1) {
      return <Line {...this.props} {...{ x0, y0, x1: x0, y1 }} />;
    }

    const borderWidth = this.props.borderWidth || DEFAULT_BORDER_WIDTH;
    const y2 = Math.round((y0 + y1) / 2);

    const xOffset = dx > 0 ? borderWidth : 0;
    const minX = Math.min(x0, x1) - xOffset;
    const maxX = Math.max(x0, x1);

    return (
      <div className="react-steppedlineto">
        <Line {...this.props} x0={x0} y0={y0} x1={x0} y1={y2} />
        <Line {...this.props} x0={x1} y0={y1} x1={x1} y1={y2} />
        <Line {...this.props} x0={minX} y0={y2} x1={maxX} y1={y2} />
      </div>
    );
  }

  renderHorizontal() {
    const x0 = Math.round(this.props.x0);
    const y0 = Math.round(this.props.y0);
    const x1 = Math.round(this.props.x1);
    const y1 = Math.round(this.props.y1);

    const dy = y1 - y0;
    if (Math.abs(dy) <= 1) {
      return <Line {...this.props} {...{ x0, y0, x1, y1: y0 }} />;
    }

    const borderWidth = this.props.borderWidth || DEFAULT_BORDER_WIDTH;
    const x2 = Math.round((x0 + x1) / 2);

    const yOffset = dy < 0 ? borderWidth : 0;
    const minY = Math.min(y0, y1) - yOffset;
    const maxY = Math.max(y0, y1);

    return (
      <div className="react-steppedlineto">
        <Line {...this.props} x0={x0} y0={y0} x1={x2} y1={y0} />
        <Line {...this.props} x0={x1} y0={y1} x1={x2} y1={y1} />
        <Line {...this.props} x0={x2} y0={minY} x1={x2} y1={maxY} />
      </div>
    );
  }
}
