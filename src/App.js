import React, { Component } from "react";
import ReactDOM from "react-dom";

import { select, selectAll } from "d3-selection";

export default class App extends Component {
  componentDidMount() {
    this.svg = select(".svg-container")
      .append("svg")
      .attr("width", 800)
      .attr("height", 400);
  }

  render() {
    return (
      <div>
        <p>React here!</p>
        <div className="svg-container" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
