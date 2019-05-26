import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuButtonsAnimated from "./components/MenuButtonsAnimated";
import SideBar from "./components/SideBar";

import { select, selectAll } from "d3-selection";
import { transition } from "d3-transition";

const histoUtils = require("./components/HistogramUtilities");

const dataFile = require("../src/data.json");
import "./style.scss";

export default class App extends Component {
  drawHistogram = data => {
    this.g
      .selectAll(".bubble")
      .data(data)
      .transition()
      .attr("cx", d => d.targetX)
      .attr("cy", d => d.targetY)
      .duration((d, i) => i * 5);
  };

  animationHopper = (data, count = 0) => {
    this.timeoutID = window.setTimeout(() => {
      if (!this.state.runAnimation) return;
      data[0].animator();

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
      .attr("fill", "#a0a0a0")
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
    const { updateSideBar } = this;

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
      .on("mouseenter", function(d) {
        select(this).attr("r", histoUtils.standardRadius + 3);

        updateSideBar(d);
      })
      .on("mouseleave", function(d) {
        select(this).attr("r", histoUtils.standardRadius);
        // updateSideBar();
      });
  };

  histoByYear = (data, buttonId) => {
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

    this.setState({ selectedHistoButton: buttonId }, () => {
      this.drawHistogram(xys);
      this.drawAxisLabels(xAxisLabels);
      this.drawValueLabels(valueLabels);
    });
  };

  histoByTicketSales = (data, buttonId) => {
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

    this.setState({ selectedHistoButton: buttonId }, () => {
      this.drawHistogram(xys);
      this.drawAxisLabels(xAxisLabels);
      this.drawValueLabels(valueLabels);
    });
  };

  histoByPlatform = (data, buttonId, histoAttribute) => {
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

    this.setState({ selectedHistoButton: buttonId }, () => {
      this.drawHistogram(xys);
      this.drawAxisLabels(xAxisLabels);
      this.drawValueLabels(valueLabels);
    });
  };

  state = {
    runAnimation: true,
    hasStarted: false,
    sideBarData: undefined,
    selectedHistoButton: undefined
  };

  componentDidMount() {
    this.width = this.svgContainer.clientWidth;
    this.height = this.svgContainer.clientHeight;

    this.data = dataFile
      .map(d => ({
        ...d,
        date: new Date(d.date),
        year: new Date(d.date).getFullYear(),
        cx: 0, //init x and y positions
        cy: -this.height,
        targetX: 0,
        targetY: -this.height
      }))
      .sort((a, b) => (a.dollar_value < b.dollar_value ? -1 : 1))
      .sort((a, b) => (a.type < b.type ? -1 : 1));

    const { data } = this;

    const anims = [
      { delay: 0, dur: 0, animator: () => this.histoByYear(data, 1) },
      { delay: 2500, dur: 0, animator: () => this.histoByTicketSales(data, 3) },
      {
        delay: 2500,
        dur: 0,
        animator: () => this.histoByPlatform(data, 0, "type")
      },
      {
        delay: 2500,
        dur: 0,
        animator: () => this.histoByPlatform(data, 2, "group")
      }
    ];

    this.svg = select(".svg-container")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    this.g = this.svg.append("g");

    this.initBubbles(data);
    this.animationHopper(anims);
  }

  onHistoButtonClick = i => {
    // this.setState({ selectedHistoButton: i });
    window.clearTimeout(this.timeoutID);
    switch (i) {
      case 0:
        //type
        this.histoByPlatform(this.data, 0, "type");
        break;
      case 1:
        //year
        this.histoByYear(this.data, 1);
        break;
      case 2:
        //dist
        this.histoByPlatform(this.data, 2, "group");
        break;
      case 3:
        //ticket sales
        this.histoByTicketSales(this.data, 3);
        break;
    }
  };

  render() {
    const { selectedHistoButton } = this.state;

    return (
      <div className="centering-container">
        <div className="header-container">
          Image here
          <div className="header-text">MOVIE BOX OFFICE PERFORMANCE</div>
        </div>
        <MenuButtonsAnimated
          selectedButton={selectedHistoButton}
          onButtonClick={i => this.onHistoButtonClick(i)}
        >
          <div>Genre</div>
          <div>Release Year</div>
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
