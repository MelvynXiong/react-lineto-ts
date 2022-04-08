import React from 'react';
import PolygonTest from './components/PolygonTest';
import SteppedTest from './components/SteppedTest';
import HoverTest from './components/HoverTest';
import LineToTest from './components/LineToTest';
import TreeTest from './components/TreeTest';
import SteppedLineToTest from './components/SteppedLineToTest';

function App() {
  return (
    <div className="App">
      <PolygonTest />
      <HoverTest />
      <LineToTest />
      <SteppedTest />
      <TreeTest /> 
      <SteppedLineToTest />
    </div>
  );
}

export default App;
