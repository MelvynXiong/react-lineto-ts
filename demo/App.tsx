import React from 'react';
import PolygonTest from './components/PolygonTest';
import SteppedTest from './components/SteppedTest';
import HoverTest from './components/HoverTest';
import LineToTest from './components/LineToTest';
import TreeTest from './components/TreeTest';

function App() {
  return (
    <div className="App">
      <PolygonTest />
      {/* <SteppedTest /> */}
      <HoverTest />
      <LineToTest />
      {/* <TreeTest /> */}
    </div>
  );
}

export default App;
