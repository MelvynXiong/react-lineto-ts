import React, { Component, useState } from 'react';
import Block from './Block';
import { LineTo } from '../../src';

export default function HoverTest() {
  const [initState, setInitState] = useState({
    from: null,
    to: null,
  });

  function clearLine() {
    setInitState({
      from: null,
      to: null,
    });
  }

  function drawLine(from, to) {
    setInitState({ from, to });
  }

  const { from, to } = initState;

  return (
    <fieldset id="hover-test">
      <div>Hover Test</div>
      <div>
        Demonstrate how to draw a line from one component to another in response to a hover event.
      </div>
      <Block
        className="hover-A"
        top="80px"
        left="20px"
        color="#00f"
        onMouseOver={() => drawLine('hover-A', 'hover-F')}
        onMouseOut={clearLine}
      >
        A
      </Block>
      <Block
        className="hover-B"
        top="140px"
        left="20px"
        color="#0f0"
        onMouseOver={() => drawLine('hover-B', 'hover-E')}
        onMouseOut={clearLine}
      >
        B
      </Block>
      <Block
        className="hover-C"
        top="200px"
        left="20px"
        color="#00f"
        onMouseOver={() => drawLine('hover-C', 'hover-D')}
        onMouseOut={clearLine}
      >
        C
      </Block>
      <Block
        className="hover-D"
        top="80px"
        left="300px"
        color="#0f0"
        onMouseOver={() => drawLine('hover-D', 'hover-C')}
        onMouseOut={clearLine}
      >
        D
      </Block>
      <Block
        className="hover-E"
        top="140px"
        left="300px"
        color="#00f"
        onMouseOver={() => drawLine('hover-E', 'hover-B')}
        onMouseOut={clearLine}
      >
        E
      </Block>
      <Block
        className="hover-F"
        top="200px"
        left="300px"
        color="#0f0"
        onMouseOver={() => drawLine('hover-F', 'hover-A')}
        onMouseOut={clearLine}
      >
        F
      </Block>
      {from && to ? (
        <LineTo
          from={from}
          to={to}
          fromAnchor="middle right"
          toAnchor="middle left"
          borderWidth={2}
        />
      ) : null}
    </fieldset>
  );
}
