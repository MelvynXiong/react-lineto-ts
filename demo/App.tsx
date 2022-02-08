import React from 'react';
import PolygonTest from './components/PolygonTest';
import SteppedTest from './components/SteppedTest';
import HoverTest from './components/HoverTest';
import DelayTest from './components/DelayTest';
import TreeTest from './components/TreeTest';

function App() {
  return (
    <div className="App">
      <PolygonTest />
      <SteppedTest />
      <HoverTest />
      <DelayTest />
      <TreeTest />
    </div>
  );
}

export default App;
