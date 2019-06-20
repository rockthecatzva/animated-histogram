import React, { Component } from "react";
import ReactDOM from "react-dom";
import MenuButtons from "./components/MenuButtons";
import SideBar from "./components/SideBar";

import { select, selectAll } from "d3-selection";
import { transition } from "d3-transition";

import img_film from "./images/film.png";

const histoUtils = require("./components/HistogramUtilities");

const dataFile = require("../src/data/scraped-movie-data.json");
import "./style.scss";

const formatThousandsMilsBills = val => {
  if (val >= 1000000000) {
    ///billions
    return (val / 1000000000).toFixed(2) + "B";
  }
  if (val >= 1000000) {
    //millions
    return Math.round(val / 1000000) + "M";
  }
  if (val >= 1000) {
    //thoudands
    return Math.round(val / 1000) + "K";
  }

  return Math.round(val);
};

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
      .attr("font-size", "12px")
      .attr("x", (d, i) => d.x)
      .attr("y", this.height + 10)
      .attr("fill", "#000")
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
      .attr(
        "class",
        d => "bubble " + d["genre"].replace(/\//gm, "").toLowerCase()
      )
      .attr("cx", this.width / 2)
      .attr("cy", -100)
      .attr("fill", "#ffffff")
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
    const labelFormatter = (
      tag // THIS SHOULD PROBABLY ONLY DO the division and "$M" parts the sum by tag should be handled in  util
    ) =>
      "$" +
      formatThousandsMilsBills(
        data
          .filter(d => d.year === tag)
          .reduce((acc, curr) => acc + curr["gross"], 0)
      );

    const {
      bubblePositions,
      xAxisLabels,
      valueLabels
    } = histoUtils.histogramFixedWidthDiscreteValues(
      data,
      "year",
      this.height,
      this.width,
      labelFormatter
    );

    this.setState(
      { selectedHistoButton: buttonId, chartTitle: "Revenue by Year" },
      () => {
        this.drawHistogram(bubblePositions);
        this.drawAxisLabels(xAxisLabels);
        this.drawValueLabels(valueLabels);
      }
    );
  };

  histoByTicketSales = (data, buttonId) => {
    const salesGroupings = [
      { label: "51-77M", min: 51342000, max: 77339130 },
      { label: "78-110M", min: 78031620, max: 110212700 },
      { label: "111-149M", min: 111035005, max: 148809770 },
      { label: "150-203M", min: 150117807, max: 202853933 },
      { label: "208-303M", min: 208545589, max: 303003568 },
      { label: "315-532M", min: 315058289, max: 532177324 },
      { label: "608-937M", min: 608581744, max: 936662225 }
    ];

    const formattedLabels = salesGroupings.map(t => {
      return (
        "$" +
        formatThousandsMilsBills(
          data
            .filter(d => d["gross"] >= t.min && d["gross"] <= t.max)
            .reduce((acc, curr) => acc + curr["gross"], 0)
        )
      );
    });

    // const labelFormatter = v => "$" + (v / 1000000).toFixed(1) + "M";

    const {
      bubblePositions,
      xAxisLabels,
      valueLabels
    } = histoUtils.histogramFixedWidthRangeValues(
      data,
      "gross",
      this.height,
      this.width,
      formattedLabels,
      salesGroupings
    );

    this.setState(
      {
        selectedHistoButton: buttonId,
        chartTitle: "Movies Grouped by Revenue"
      },
      () => {
        this.drawHistogram(bubblePositions);
        this.drawAxisLabels(xAxisLabels);
        this.drawValueLabels(valueLabels);
      }
    );
  };

  histoByPlatform = (data, buttonId, histoAttribute) => {
    const labelFormatter = (
      tag // THIS SHOULD PROBABLY ONLY DO the division and "$M" parts the sum by tag should be handled in  util
    ) =>
      "$" +
      formatThousandsMilsBills(
        data
          .filter(d => d[histoAttribute] === tag)
          .reduce((acc, curr) => acc + curr["gross"], 0)
      );

    let chartTitle;
    switch (histoAttribute) {
      case "genre":
        chartTitle = "Movies by Genre";
        break;
      case "mpaaRating":
        chartTitle = "Movies by MPAA Rating";
        break;
    }

    const {
      bubblePositions,
      xAxisLabels,
      valueLabels
    } = histoUtils.histogramDynamicWidthDiscreteValues(
      data,
      histoAttribute,
      this.height,
      this.width,
      labelFormatter
    );

    this.setState({ selectedHistoButton: buttonId, chartTitle }, () => {
      this.drawHistogram(bubblePositions);
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
        // date: new Date(d.date),
        // year: new Date(d.date).getFullYear(),
        cx: 0, //init x and y positions
        cy: -this.height,
        targetX: 0,
        targetY: -this.height
      }))
      .sort((a, b) => (a["gross"] < b["gross"] ? -1 : 1))
      .sort((a, b) => (a["genre"] < b["genre"] ? -1 : 1));

    const { data } = this;

    const anims = [
      { delay: 0, dur: 0, animator: () => this.histoByYear(data, 1) },
      { delay: 3500, dur: 0, animator: () => this.histoByTicketSales(data, 3) },
      {
        delay: 3500,
        dur: 0,
        animator: () => this.histoByPlatform(data, 0, "genre")
      },
      {
        delay: 3500,
        dur: 0,
        animator: () => this.histoByPlatform(data, 2, "mpaaRating")
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
          //genre
          this.histoByPlatform(this.data, 0, "genre");
          break;
        case 1:
          //year
          this.histoByYear(this.data, 1);
          break;
        case 2:
          //dist
          this.histoByPlatform(this.data, 2, "mpaaRating");
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
            <h1 className="header-text">TOP 400 MOVIES OVER PAST 8 YEARS</h1>
          </div>
          <h5 className="disclaimer">*using data scraped from <a href="https://www.boxofficemojo.com/">boxofficemojo.com</a> ...see botttom for more details</h5>
        </div>
        <MenuButtons
          selectedButton={selectedHistoButton}
          onButtonClick={i => this.onHistoButtonClick(i)}
        >
          <div>Genre</div>
          <div>Release Year</div>
          <div>MPAA Rating</div>
          <div>Ticket Sales</div>
        </MenuButtons>
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
              <div className="actionadventure" />
              Action/Adventure
            </li>
            <li>
              <div className="comedy" />
              Comedy
            </li>
            <li>
              <div className="horror" />
              Horror
            </li>
            <li>
              <div className="animationfamily" />
              Animation/Family
            </li>
            <li>
              <div className="sci-fifantasy" />
              Sci-Fi/Fantasy
            </li>
            <li>
              <div className="other" />
              Other
            </li>
          </ul>
        </div>
        <div className="footer">
          <p>dcatzva@gmail.com - 2019</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
