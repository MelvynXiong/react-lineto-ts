import React, { useState } from 'react';
import Block from './Block';
import { LineTo } from '../../src';

export default function LineToTest() {
  const [visible, setVisible] = useState(true);

  return (
    <fieldset id="delay-test">
      <div>Delay Test</div>
      <span>
        Demonstrate how to draw a line to a component which does not exist at the moment that the
        LineTo component has been mounted.
      </span>
      <Block
        className="delay-E"
        top="80px"
        left="20px"
        color="#00f"
        // onMouseOver={() => setVisible(true)}
        // onMouseOut={() => setVisible(false)}
      >
        E
      </Block>
      {visible ? (
        <>
          <Block className="delay-F" top="80px" left="300px" color="#f00">
            F
          </Block>
          <LineTo
            from="delay-E"
            to="delay-F"
            fromAnchor="middle right"
            toAnchor="middle left"
            borderColor="#0f0"
            borderStyle="solid"
            borderWidth={2}
          />
        </>
      ) : null}
    </fieldset>
  );
}
