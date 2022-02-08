import React, { Component } from 'react';
import Block from './Block';
import { LineTo } from '../../src';

export default class DelayTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetVisible: false,
    };
  }

  render() {
    const target = this.state.targetVisible ? (
      <Block className="delay-F" top="80px" left="300px" color="#f00">
        F
      </Block>
    ) : null;
    return (
      <fieldset id="delay-test">
        <legend>Delay Test</legend>
        Demonstrate how to draw a line to a component which does not exist at the moment that the
        LineTo component has been mounted.
        <Block
          className="delay-E"
          top="80px"
          left="20px"
          color="#00f"
          onMouseOver={() => this.setState({ targetVisible: true })}
          onMouseOut={() => this.setState({ targetVisible: false })}
        >
          E
        </Block>
        {target}
        <LineTo
          from="delay-E"
          to="delay-F"
          fromAnchor="75% 75%"
          toAnchor="25% 25%"
          borderColor="#0f0"
          borderStyle="dotted"
          borderWidth={2}
          delay={1}
        />
      </fieldset>
    );
  }
}
