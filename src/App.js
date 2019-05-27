import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuButtonsAnimated from "./components/MenuButtonsAnimated";
import SideBar from "./components/SideBar";

import { select, selectAll } from "d3-selection";
import { transition } from "d3-transition";

import img_film from "./images/film.png";

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
    const par = this;

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
        par.setState({ showInstructions: false, sideBarData: d });
        // updateSideBar(d);
      })
      .on("mouseleave", function(d) {
        select(this).attr("r", histoUtils.standardRadius);
        par.setState({ showInstructions: true });
        // updateSideBar();
      });
  };

  histoByYear = (data, buttonId) => {
    const tags = histoUtils.tagGetter(data.map(d => d.year));
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

    this.setState(
      { selectedHistoButton: buttonId, chartTitle: "Revenue by Year" },
      () => {
        this.drawHistogram(xys);
        this.drawAxisLabels(xAxisLabels);
        this.drawValueLabels(valueLabels);
      }
    );
  };

  histoByTicketSales = (data, buttonId) => {
    const salesGroupings = [
      { label: "0-25k", min: 0, max: 25000 },
      { label: "25-100k", min: 25000, max: 100000 },
      { label: "100-250k", min: 100000, max: 250000 },
      { label: "250-500k", min: 250000, max: 500000 },
      { label: "500k-1M", min: 500000, max: 1000000 },
      { label: "1M-2.5M", min: 1000000, max: 2500000 },
      { label: "2.5M-30M", min: 2500000, max: 30000000 }
    ];

    const rcs = histoUtils.rowColGetter_fixedColumnWidth(
      salesGroupings,
      "ticket_sales",
      data,
      histoUtils.indexGetterRanges(salesGroupings)
    );
    const centerX = histoUtils.centerX(rcs, this.width);
    const xys = histoUtils.xYGetter(rcs, centerX, this.height);

    const indexGetter = histoUtils.indexGetterRanges(salesGroupings);

    const salesByTag = salesGroupings.map(
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

    const xAxisLabels = salesGroupings
      .map(a => a.label)
      .map((t, i) => ({
        text: t,
        x: labelX[i],
        y: this.height - 5
      }));

    const valueY = histoUtils.valueLabelYPositions(
      salesGroupings,
      rcs,
      this.height,
      40
    );

    const valueLabels = salesGroupings.map((t, i) => ({
      text: salesByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    this.setState(
      {
        selectedHistoButton: buttonId,
        chartTitle: "Movies Grouped by Revenue"
      },
      () => {
        this.drawHistogram(xys);
        this.drawAxisLabels(xAxisLabels);
        this.drawValueLabels(valueLabels);
      }
    );
  };

  histoByPlatform = (data, buttonId, histoAttribute) => {
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

    let chartTitle;
    switch (histoAttribute) {
      case "type":
        chartTitle = "Movies by Genre";
        break;
      case "group":
        chartTitle = "Movies by Distribution";
        break;
    }

    this.setState({ selectedHistoButton: buttonId, chartTitle }, () => {
      this.drawHistogram(xys);
      this.drawAxisLabels(xAxisLabels);
      this.drawValueLabels(valueLabels);
    });
  };

  state = {
    runAnimation: true,
    hasStarted: false,
    sideBarData: undefined,
    showInstructions: true,
    selectedHistoButton: undefined,
    chartTitle: ""
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
    window.clearTimeout(this.timeoutID);
    if (i !== this.state.selectedHistoButton) {
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
    }
  };

  render() {
    const {
      selectedHistoButton,
      sideBarData,
      showInstructions,
      chartTitle
    } = this.state;

    return (
      <div className="centering-container">
        <div className="header-container">
          <div>
            <img className="header-img" src={img_film} />
            <h1 className="header-text">MOVIE BOX OFFICE PERFORMANCE</h1>
          </div>

          <h5 className="disclaimer">*using totally random data...for now</h5>
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
          <div className="svg-container" ref={ref => (this.svgContainer = ref)}>
            <h3>{chartTitle}</h3>
          </div>
          <SideBar data={sideBarData} showInstructions={showInstructions} />
        </div>

        <div className="legend-container">
          <h3>Legend</h3>
          <ul>
            <li>
              <div className="Action" />
              Action
            </li>
            <li>
              <div className="Comedy" />
              Comedy
            </li>
            <li>
              <div className="Horror" />
              Horror
            </li>
            <li>
              <div className="Romantic" />
              Romantic
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
