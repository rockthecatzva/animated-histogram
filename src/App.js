import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuButtonsAnimated from "./components/MenuButtonsAnimated";
import SideBar from "./components/SideBar";

import { select, selectAll } from "d3-selection";
import { transition } from "d3-transition";

const histoUtils = require("./components/HistogramUtilities");

const dataFile = require("../src/data.json");

export default class App extends Component {
  drawHistogram = data => {
    const bubs = [...document.querySelectorAll(".bubble")];

    bubs.forEach((b, i) => {
      if (data[i].targetX) {
        select(b)
          .attr("cx", () => data[i].targetX)
          .attr("cy", () => data[i].cy)
          .transition()
          .attr("cx", () => data[i].targetX)
          .attr("cy", () => data[i].targetY)
          .duration(i * 5);
      } else {
        select(b)
          .transition()
          .attr("cx", () => data[i].cx)
          .attr("cy", () => data[i].cy)
          .duration(2000);
      }
    });
  };

  animationHopper = (data, count = 0) => {
    setTimeout(() => {
      if (!this.state.runAnimation) return;
      const updateElems = data[0].animator();

      if (updateElems) {
        let bubs = updateElems.bubbles;

        if (count === 1) {
          //override bubs here
          bubs = bubs.map(b => {
            return {
              ...b,
              targetX: b.cx,
              targetY: b.cy,
              cx: b.cx,
              cy: -b.cy
            };
          });
        }

        this.drawHistogram(bubs);
        this.drawAxisLabels(updateElems.xAxisLabels);
        this.drawValueLabels(updateElems.valueLabels);
      }

      if (data.length > 1) {
        this.animationHopper(data.slice(1), ++count);
      }
    }, data[0].delay);
  };
  //

  drawAxisLabels = data => {
    const xLabs = this.g.selectAll(".xaxis-labels").data(data);

    //update
    xLabs
      .attr("class", "xaxis-labels")
      .transition()
      .text(d => d.text)
      .attr("x", (d, i) => d.x)
      .attr("y", d => d.y)
      .attr("opacity", 1)
      .duration(1000);

    //enter
    xLabs
      .enter()
      .append("text")
      .attr("class", "xaxis-labels")
      .text(d => d.text)
      .attr("x", (d, i) => d.x)
      .attr("y", this.height + 10)
      .transition()
      .attr("y", d => d.y)
      .attr("opacity", 1)
      .style("text-anchor", "middle")
      .duration(1000);

    //exit
    xLabs
      .exit()
      .transition()
      .attr("opacity", 0)
      .attr("y", this.height + 10)
      .duration(800)
      .remove();
  };

  drawValueLabels = (data = []) => {
    const valueLabs = this.g.selectAll(".value-labels").data(data);

    //update
    valueLabs
      .attr("class", "value-labels")
      .text(d => d.text)
      .attr("opacity", 0)
      .attr("x", (d, i) => d.x)
      .attr("y", d => d.y)
      .transition()
      .delay(1800)
      .attr("opacity", 1)
      .duration(700);

    //enter
    valueLabs
      .enter()
      .append("text")
      .attr("class", "value-labels")
      .style("text-anchor", "middle")
      .text(d => d.text)
      .attr("x", (d, i) => d.x)
      .attr("y", d => d.y)
      .attr("opacity", 0)
      .transition()
      .delay(1800)
      .attr("opacity", 1)
      .duration(700);

    //exit
    valueLabs
      .exit()
      // .transition()
      // .attr("opacity", 0)
      // .duration(700)
      .remove();
  };

  updateSideBar = (sideBarData = undefined) => {
    this.setState({ sideBarData });
  };

  initBubbles = data => {
    this.g
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", d => "bubble " + d["type"])
      .attr("cx", this.width / 2)
      .attr("cy", -100)
      .attr("fill", "#71C8AF")
      .attr("r", histoUtils.standardRadius)
      .on("mouseenter", d => this.updateSideBar(d))
      .on("mouseleave", () => this.updateSideBar());
  };

  // updateToggleButtons = target => {
  //   document.querySelectorAll(".button-animationtoggle").forEach(e => {
  //     e.classList.remove("highlight");
  //   });
  //   document.querySelector(target).classList.add("highlight");
  // };

  histoByYear = data => {
    // updateToggleButtons("#year");

    //2. get unduplicated list of tags
    const tags = histoUtils.tagGetter(data.map(d => d.year));

    //get row and column positions
    const rcs = histoUtils.rowColGetter_fixedColumnWidth(
      tags,
      "year",
      data,
      histoUtils.indexGetterDiscrete(tags)
    );

    //3. figure out how much spacing we need to center the graph
    const centerX = histoUtils.centerX(rcs, this.width);
    //use the row/col to calc an x and y position
    const xys = histoUtils.xYGetter(rcs, centerX, this.height);
    const salesByTag = tags.map(
      tag =>
        "$" +
        (
          data
            .filter(d => d.year === tag)
            .reduce((acc, curr) => acc + curr["ticket_sales"], 0) / 1000000
        ).toFixed(1) +
        "M"
    );

    const labelX = histoUtils.labelXPositions(
      salesByTag,
      rcs,
      centerX,
      histoUtils.columnWidth - 1
    );

    const xAxisLabels = tags.map((t, i) => ({
      text: t,
      x: labelX[i],
      y: this.height - 5
    }));

    const valueY = histoUtils.valueLabelYPositions(tags, rcs, this.height, 40);

    const valueLabels = tags.map((t, i) => ({
      text: salesByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    return { bubbles: xys, xAxisLabels, valueLabels };
  };

  histoByTicketSales = data => {
    // updateToggleButtons("#award");

    const sales_groupings = [
      { label: "0-25k", min: 0, max: 25000 },
      { label: "25-100k", min: 25000, max: 100000 },
      { label: "100-250k", min: 100000, max: 250000 },
      { label: "250-500k", min: 250000, max: 500000 },
      { label: "500k-1M", min: 500000, max: 1000000 },
      { label: "1M-2.5M", min: 1000000, max: 2500000 },
      { label: "2.5M-30M", min: 2500000, max: 30000000 }
    ];
    // const bubs = [...document.querySelectorAll(".bubble")];
    const rcs = histoUtils.rowColGetter_fixedColumnWidth(
      sales_groupings,
      "ticket_sales",
      data,
      histoUtils.indexGetterRanges(sales_groupings)
    );
    const centerX = histoUtils.centerX(rcs, this.width);
    const xys = histoUtils.xYGetter(rcs, centerX, this.height);

    const indexGetter = histoUtils.indexGetterRanges(sales_groupings);

    const salesByTag = sales_groupings.map(
      (t, i) =>
        "$" +
        (
          data
            .filter(b => indexGetter(b["ticket_sales"]) === i)
            .reduce((acc, curr) => acc + curr["ticket_sales"], 0) / 1000000
        ).toFixed(1) +
        "M"
    );

    const labelX = histoUtils.labelXPositions(
      salesByTag,
      rcs,
      centerX,
      histoUtils.columnWidth - 1
    );

    const xAxisLabels = sales_groupings
      .map(a => a.label)
      .map((t, i) => ({
        text: t,
        x: labelX[i],
        y: this.height - 5
      }));

    const valueY = histoUtils.valueLabelYPositions(
      sales_groupings,
      rcs,
      this.height,
      40
    );

    const valueLabels = sales_groupings.map((t, i) => ({
      text: salesByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    return { bubbles: xys, xAxisLabels, valueLabels };
  };

  histoByPlatform = (data, histoAttribute) => {
    // updateToggleButtons("#" + histoAttribute);

    // const bubs = [...document.querySelectorAll(".bubble")];
    const tags = histoUtils.tagGetter(data.map(d => d[histoAttribute]));
    const rcs = histoUtils.rowColGetter_dynamicColumnWidth(
      tags,
      histoAttribute,
      data,
      histoUtils.indexGetterDiscrete(tags)
    );
    const centerX = histoUtils.centerX(rcs, this.width);
    const xys = histoUtils.xYGetter(rcs, centerX, this.height);

    const salesByTag = tags.map(
      tag =>
        "$" +
        (
          data
            .filter(b => b[histoAttribute] === tag)
            .reduce((acc, curr) => acc + parseInt(curr["ticket_sales"]), 0) /
          1000000
        ).toFixed(1) +
        "M"
    );

    const labelX = histoUtils.labelXPositions(salesByTag, rcs, centerX);

    const xAxisLabels = tags.map((t, i) => ({
      text: t,
      x: labelX[i],
      y: this.height - 5
    }));

    const valueY = histoUtils.valueLabelYPositions(tags, rcs, this.height, 40);

    const valueLabels = tags.map((t, i) => ({
      text: salesByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    return { bubbles: xys, xAxisLabels, valueLabels };
  };

  state = {
    runAnimation: true,
    hasStarted: false,
    sideBarData: undefined,
    selectedHistoButton: 0
  };

  componentDidMount() {
    const data = dataFile
      .map(d => ({
        ...d,
        date: new Date(d.date),
        year: new Date(d.date).getFullYear()
      }))
      .sort((a, b) => (a.dollar_value < b.dollar_value ? -1 : 1))
      .sort((a, b) => (a.type < b.type ? -1 : 1));

    const anims = [
      { delay: 0, dur: 0, animator: () => this.initBubbles(data) },
      { delay: 0, dur: 0, animator: () => this.histoByYear(data) },
      { delay: 2500, dur: 0, animator: () => this.histoByTicketSales(data) },
      {
        delay: 2500,
        dur: 0,
        animator: () => this.histoByPlatform(data, "type")
      },
      {
        delay: 2500,
        dur: 0,
        animator: () => this.histoByPlatform(data, "group")
      }
    ];

    this.width = this.svgContainer.clientWidth;
    this.height = this.svgContainer.clientHeight;

    this.svg = select(".svg-container")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    this.g = this.svg.append("g");

    this.animationHopper(anims);
  }

  onHistoButtonClick = i=>{
    this.setState({selectedHistoButton: i})
  }

  render() {
    const { selectedHistoButton } = this.state;
console.log(selectedHistoButton)
    return (
      <div>
        <MenuButtonsAnimated
          selectedButton={selectedHistoButton}
          onButtonClick={i => this.onHistoButtonClick(i)}
        >
          <div>Type</div>
          <div>Year</div>
          <div>Distribution</div>
          <div>Ticket Sales</div>
        </MenuButtonsAnimated>
        <div className="svg-and-sidebar">
          <div
            className="svg-container"
            ref={ref => (this.svgContainer = ref)}
          />
          <SideBar data={this.state.sideBarData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
