import React, { Component } from 'react';
import TreeItem from './TreeItem';

export default class TreeTest extends Component {
  render() {
    return (
      <fieldset id="tree-test">
        <div>Tree Test</div>
        <div className="tree-test-wrap">
          <TreeItem name="" depth={0} index={0} />
        </div>
      </fieldset>
    );
  }
}
