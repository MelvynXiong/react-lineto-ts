import React, { Component } from 'react';
import Block from './Block';
import { SteppedLineTo } from '../../src';

interface Props {
  depth: number;
  index: number;
  parent: any;
  name: string;
}
export default class TreeItem extends Component<Props> {
  render() {
    const style = {
      delay: true,
      borderColor: '#ddd',
      borderStyle: 'solid',
      borderWidth: 3,
    };
    const h = { _: 20, A: 120, B: 100, C: 200, D: 50 }[this.props.name[0] || '_'];
    const l = Math.ceil(((this.props.index + 2) / 20) * 100) + 10 * (this.props.depth + 1);
    return (
      <div className="tree-item">
        <div className="tree-block-wrap">
          <Block className={`tree-${this.props.name}`} color={`hsl(${h}, 100%, ${l}%)`}>
            {this.props.name || 'X'}
          </Block>
        </div>
        {this.props.depth < 2 ? (
          <div className="tree-column">
            {Array(Math.ceil(Math.random() * 3) + 1)
              .fill(null)
              .map((_, i) => (
                <TreeItem
                  parent={this}
                  index={this.props.index * this.props.depth + i}
                  name={`${this.props.name}${String.fromCharCode(65 + i)}`}
                  depth={this.props.depth + 1}
                  key={i}
                />
              ))}
          </div>
        ) : null}
        {this.props.parent ? (
          <SteppedLineTo
            within="tree-test-wrap"
            from={`tree-${this.props.parent.props.name}`}
            to={`tree-${this.props.name}`}
            fromAnchor="right"
            toAnchor="left"
            orientation="h"
            {...style}
          />
        ) : null}
      </div>
    );
  }
}
