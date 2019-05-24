import React, { Component } from "react";
import ReactDOM from "react-dom";

import { select, selectAll } from "d3-selection";
import {transition} from "d3-transition"

const histoUtils = require("./components/HistogramUtilities");

const dataFile = require("../src/data.json");
const data = dataFile
  .sort((a, b) => (a.dollar_value < b.dollar_value ? -1 : 1))
  .sort((a, b) => (a.type < b.type ? -1 : 1));

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
    const xLabs = g.selectAll(".xaxis-labels").data(data);

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
      .attr("y", height + 10)
      .transition()
      .attr("y", d => d.y)
      .attr("opacity", 1)
      .duration(1000);

    //exit
    xLabs
      .exit()
      .transition()
      .attr("opacity", 0)
      .attr("y", height + 10)
      .duration(800)
      .remove();
  };

  drawValueLabels = (data = []) => {
    const valueLabs = g.selectAll(".value-labels").data(data);

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

  initBubbles = () => {
    this.g.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", d => "bubble " + d["platform"])
      .attr("cx", this.width / 2)
      .attr("cy", -100)
      .attr("opp_name", d => d.opp_name)
      .attr("platform", d => d.platform)
      .attr("granttype", d => d["grant_type"])
      .attr("awarded_dollars", d => d["awarded_dollars"])
      .attr("requested_dollars", d => d["requested_dollars"])
      .attr("date", d => d["date"])
      .attr("year", d => new Date(d["date"]).getFullYear())
      .attr("fill", "#71C8AF")
      .attr("r", histoUtils.standardRadius)
    //   .on("mouseenter", )
    //   .on("mouseleave", );
  };

  //   updateToggleButtons = target => {
  //     document.querySelectorAll(".button-animationtoggle").forEach(e => {
  //       e.classList.remove("highlight");
  //     });
  //     document.querySelector(target).classList.add("highlight");
  //   };

  histoByYear = () => {
    // updateToggleButtons("#year");

    const histoAttribute = "date";
    //1. get bubbles
    const bubs = [...document.querySelectorAll(".bubble")];
    //2. get unduplicated list of tags
    const tags = histoUtils.tagGetter(bubs, histoAttribute, d => {
      return new Date(d).getFullYear();
    });
    //get row and column positions
    const rcs = histoUtils.rowColGetter_fixedColumnWidth(
      tags,
      d => new Date(d.getAttribute(histoAttribute)).getFullYear(),
      bubs,
      histoUtils.indexGetterDiscrete(tags)
    );
    //3. figure out how much spacing we need to center the graph
    const centerX = histoUtils.centerX(rcs, this.width);
    //use the row/col to calc an x and y position
    const xys = histoUtils.xYGetter(rcs, centerX, this.height);
    const awardTotalByTag = tags.map(
      (t, i) =>
        "$" +
        (
          bubs
            .filter(b => b.getAttribute("year") === t.toString())
            .reduce(
              (acc, curr) =>
                acc + parseInt(curr.getAttribute("awarded_dollars")),
              0
            ) / 1000000
        ).toFixed(1) +
        "M"
    );

    const labelX = histoUtils.labelXPositions(
      awardTotalByTag,
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
      text: awardTotalByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    return { bubbles: xys, xAxisLabels, valueLabels };
  };

  histoByAwardSize = () => {
    updateToggleButtons("#award");
    const histoAttribute = "awarded_dollars";
    const award_groups = [
      { label: "0-25k", min: 0, max: 25000 },
      { label: "25-100k", min: 25000, max: 100000 },
      { label: "100-250k", min: 100000, max: 250000 },
      { label: "250-500k", min: 250000, max: 500000 },
      { label: "500k-1M", min: 500000, max: 1000000 },
      { label: "1M-2.5M", min: 1000000, max: 2500000 },
      { label: "2.5M-30M", min: 2500000, max: 30000000 }
    ];
    const bubs = [...document.querySelectorAll(".bubble")];
    const rcs = histoUtils.rowColGetter_fixedColumnWidth(
      award_groups,
      d => parseInt(d.getAttribute(histoAttribute)),
      bubs,
      histoUtils.indexGetterRanges(award_groups)
    );
    const centerX = histoUtils.centerX(rcs, width);
    const xys = histoUtils.xYGetter(rcs, centerX, height);

    const indexGetter = histoUtils.indexGetterRanges(award_groups);

    const awardTotalByTag = award_groups.map(
      (t, i) =>
        "$" +
        (
          bubs
            .filter(b => indexGetter(b.getAttribute("awarded_dollars")) === i)
            .reduce(
              (acc, curr) =>
                acc + parseInt(curr.getAttribute("awarded_dollars")),
              0
            ) / 1000000
        ).toFixed(1) +
        "M"
    );

    const labelX = histoUtils.labelXPositions(
      awardTotalByTag,
      rcs,
      centerX,
      histoUtils.columnWidth - 1
    );

    const xAxisLabels = award_groups
      .map(a => a.label)
      .map((t, i) => ({
        text: t,
        x: labelX[i],
        y: height - 5
      }));

    const valueY = histoUtils.valueLabelYPositions(award_groups, rcs, height, 40);

    const valueLabels = award_groups.map((t, i) => ({
      text: awardTotalByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    return { bubbles: xys, xAxisLabels, valueLabels };
  };

  histoByPlatform = histoAttribute => {
    updateToggleButtons("#" + histoAttribute);
    // document.querySelectorAll(".button-view-toggle").forEach(e => {
    //   e.classList.remove("highlight");
    // });
    // document
    //   .querySelector("#btn-" + histoAttribute)
    //   .classList.add("highlight");

    const bubs = [...document.querySelectorAll(".bubble")];
    const tags = histoUtils.tagGetter(bubs, histoAttribute, d => d);
    const rcs = histoUtils.rowColGetter_dynamicColumnWidth(
      tags,
      d => d.getAttribute(histoAttribute),
      bubs,
      histoUtils.indexGetterDiscrete(tags)
    );
    const centerX = histoUtils.centerX(rcs, width);
    const xys = histoUtils.xYGetter(rcs, centerX, height);
    // const labs = histoUtils.labelMaker(tags, rcs, centerX, height);

    const awardTotalByTag = tags.map(
      (t, i) =>
        "$" +
        (
          bubs
            .filter(b => b.getAttribute(histoAttribute) === t.toString())
            .reduce(
              (acc, curr) =>
                acc + parseInt(curr.getAttribute("awarded_dollars")),
              0
            ) / 1000000
        ).toFixed(1) +
        "M"
    );

    const labelX = histoUtils.labelXPositions(awardTotalByTag, rcs, centerX);

    const xAxisLabels = tags.map((t, i) => ({
      text: t,
      x: labelX[i],
      y: height - 5
    }));

    const valueY = histoUtils.valueLabelYPositions(tags, rcs, height, 40);

    const valueLabels = tags.map((t, i) => ({
      text: awardTotalByTag[i],
      x: labelX[i],
      y: valueY[i]
    }));

    return { bubbles: xys, xAxisLabels, valueLabels };

    // return { bubbles: xys, xAxisLabels: labs };
  };

  state = {
    runAnimation: true,
    hasStarted: false
  };

  componentDidMount() {
    const anims = [
      { delay: 0, dur: 0, animator: this.initBubbles },
      { delay: 0, dur: 0, animator: this.histoByYear }
      // { delay: 2000, dur: 0, animator: histoByAwardSize },
      // { delay: 2000, dur: 0, animator: () => histoByPlatform("platform") },
      // { delay: 2000, dur: 0, animator: () => histoByPlatform("granttype") }
    ];

    this.width = 800;
    this.height = 400

    this.svg = select(".svg-container")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    this.g=this.svg.append("g")

    this.animationHopper(anims);
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
