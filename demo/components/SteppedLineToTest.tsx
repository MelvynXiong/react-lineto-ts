import React, { Component } from 'react';
import Block from './Block';
import { SteppedLineTo } from '../../src';

export default function SteppedLineToTest() {
  const style = {
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 25,
  };

  return (
    <fieldset id="stepped-test">
      <div>Stepped LineTo Test</div>
      <div>Demonstrate how to draw stepped lines.</div>
      <Block className="stepped-A" top="50.2px" left="90px" color="#00f">
        A
      </Block>
      {/* <Block className="stepped-B" top="150px" left="20px" color="#00f">
        B
      </Block> */}
      {/* <Block className="stepped-E" top="50px" left="300px" color="#00f">
        E
      </Block> */}
      <Block className="stepped-F" top="120px" left="300px" color="#00f">
        F
      </Block>
      <SteppedLineTo
        from="stepped-F"
        to="stepped-A"
        fromAnchor="left"
        toAnchor="right"
        orientation="h"
        {...style}
      />
    </fieldset>
  );
}
