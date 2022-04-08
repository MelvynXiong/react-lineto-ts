import React, { Component } from 'react';
import Block from './Block';
import { SteppedLineTo } from '../../src';

export default function SteppedTest() {
  const style = {
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1,
  };

  return (
    <fieldset id="stepped-test">
      <div>Stepped Test</div>
      <div>Demonstrate how to draw stepped lines.</div>
      <Block className="stepped-A" top="50.2px" left="90px" color="#00f">
        A
      </Block>
      <Block className="stepped-B" top="150px" left="20px" color="#00f">
        B
      </Block>
      <Block className="stepped-C" top="150px" left="90.7px" color="#00f">
        C
      </Block>
      <Block className="stepped-D" top="150px" left="160px" color="#00f">
        D
      </Block>
      <Block className="stepped-E" top="50px" left="300px" color="#00f">
        E
      </Block>
      <Block className="stepped-F" top="120px" left="300px" color="#00f">
        F
      </Block>
      <SteppedLineTo
        from="stepped-A"
        to="stepped-B"
        fromAnchor="bottom"
        toAnchor="top"
        {...style}
      />
      <SteppedLineTo
        from="stepped-A"
        to="stepped-C"
        fromAnchor="bottom"
        toAnchor="top"
        {...style}
      />
      <SteppedLineTo
        from="stepped-A"
        to="stepped-D"
        fromAnchor="bottom"
        toAnchor="top"
        {...style}
      />
      <SteppedLineTo
        from="stepped-A"
        to="stepped-E"
        fromAnchor="right"
        toAnchor="left"
        orientation="h"
        {...style}
      />
      <SteppedLineTo
        from="stepped-A"
        to="stepped-F"
        fromAnchor="right"
        toAnchor="left"
        orientation="h"
        {...style}
      />
    </fieldset>
  );
}
