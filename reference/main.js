require("@babel/polyfill");

const d3 = require("d3-selection");
const transition = require("d3-transition");
const histos = require("./HanoverHistogramBubbles");

const dataFile = require("../src/data.json");
const data = dataFile
  // .map(r => ({...r, awarded_dollars: parseInt(r.awarded_dollars)}))
  .filter(r => parseInt(r.awarded_dollars) !== 0)
  .sort((a, b) => {
    if (parseInt(a.awarded_dollars) < parseInt(b.awarded_dollars)) return -1;
    if (parseInt(a.awarded_dollars) > parseInt(b.awarded_dollars)) return 1;
    return 0;
  })
  .sort((a, b) => {
    if (a.platform < b.platform) return -1;
    if (a.platform > b.platform) return 1;
    return 0;
  });

const formatDollars = x => x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function onMouseEnter(d, i) {
  document.getElementById("side-tooltip").classList.remove("dnone");
  document.getElementById("side-instructs").classList.add("dnone");
  document.querySelector("#award-val").innerHTML =
    "$" + formatDollars(this.getAttribute("awarded_dollars"));

  const reqval = this.getAttribute("requested_dollars");
  if (reqval !== "") {
    document.querySelector("#req-row").classList.remove("dnone");
    document.querySelector("#req-val").innerHTML =
      "$" + formatDollars(this.getAttribute("requested_dollars"));
  } else {
    document.querySelector("#req-row").classList.add("dnone");
  }

  document.querySelector("#year-val").innerHTML = this.getAttribute("year");
  document.querySelector("#source-val").innerHTML = this.getAttribute(
    "granttype"
  );
  document.querySelector("#source-val").innerHTML = this.getAttribute(
    "granttype"
  );
  document.querySelector("#platform-val").innerHTML = this.getAttribute(
    "platform"
  );
  document.querySelector("#project-name").innerHTML = this.getAttribute(
    "opp_name"
  );
  document.querySelector(".legend-circle").className =
    "legend-circle " + this.getAttribute("platform");

  d3.select(this).style("fill", "#00000000");
}

function onMouseLeave(d, i) {
  document.getElementById("side-tooltip").classList.add("dnone");
  document.getElementById("side-instructs").classList.remove("dnone");
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.querySelectorAll(".button-animationtoggle").forEach(e => {
      e.addEventListener("click", () => onToggleView(e.getAttribute("id")));
    });

    const totalFunding = formatDollars(
      data
        .reduce((acc, curr) => acc + parseInt(curr["awarded_dollars"]), 0)
        .toString()
    );

    document.querySelector("#total_awarded").innerHTML = "$" + totalFunding;

    const el = document.querySelector("svg"),
      svg = d3.select("svg"),
      width = parseInt(svg.style("width").replace("px","")),//el.clientWidth || el.parentNode.clientWidth,
      height = parseInt(svg.style("height").replace("px","")),//el.clientHeight || el.parentNode.clientHeight,
      g = svg.append("g");
      

    const initBubbles = () => {
      g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", d => "bubble " + d["platform"])
        .attr("cx", width / 2)
        .attr("cy", -100)
        .attr("opp_name", d => d.opp_name)
        .attr("platform", d => d.platform)
        .attr("granttype", d => d["grant_type"])
        .attr("awarded_dollars", d => d["awarded_dollars"])
        .attr("requested_dollars", d => d["requested_dollars"])
        .attr("date", d => d["date"])
        .attr("year", d => new Date(d["date"]).getFullYear())
        .attr("fill", "#71C8AF")
        .attr("r", histos.standardRadius)
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave);
    };

    const updateToggleButtons = target => {
      document.querySelectorAll(".button-animationtoggle").forEach(e => {
        e.classList.remove("highlight");
      });
      document.querySelector(target).classList.add("highlight");
    };

    const histoByYear = () => {
      updateToggleButtons("#year");

      const histoAttribute = "date";
      //1. get bubbles
      const bubs = [...document.querySelectorAll(".bubble")];
      //2. get unduplicated list of tags
      const tags = histos.tagGetter(bubs, histoAttribute, d => {
        return new Date(d).getFullYear();
      });
      //get row and column positions
      const rcs = histos.rowColGetter_fixedColumnWidth(
        tags,
        d => new Date(d.getAttribute(histoAttribute)).getFullYear(),
        bubs,
        histos.indexGetterDiscrete(tags)
      );
      //3. figure out how much spacing we need to center the graph
      const centerX = histos.centerX(rcs, width);
      //use the row/col to calc an x and y position
      const xys = histos.xYGetter(rcs, centerX, height);
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

      const labelX = histos.labelXPositions(
        awardTotalByTag,
        rcs,
        centerX,
        histos.columnWidth - 1
      );

      const xAxisLabels = tags.map((t, i) => ({
        text: t,
        x: labelX[i],
        y: height - 5
      }));

      const valueY = histos.valueLabelYPositions(tags, rcs, height, 40);

      const valueLabels = tags.map((t, i) => ({
        text: awardTotalByTag[i],
        x: labelX[i],
        y: valueY[i]
      }));

      return { bubbles: xys, xAxisLabels, valueLabels };
    };

    const histoByAwardSize = () => {
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
      const rcs = histos.rowColGetter_fixedColumnWidth(
        award_groups,
        d => parseInt(d.getAttribute(histoAttribute)),
        bubs,
        histos.indexGetterRanges(award_groups)
      );
      const centerX = histos.centerX(rcs, width);
      const xys = histos.xYGetter(rcs, centerX, height);

      const indexGetter = histos.indexGetterRanges(award_groups);

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

      const labelX = histos.labelXPositions(
        awardTotalByTag,
        rcs,
        centerX,
        histos.columnWidth - 1
      );

      const xAxisLabels = award_groups.map(a => a.label).map((t, i) => ({
        text: t,
        x: labelX[i],
        y: height - 5
      }));

      const valueY = histos.valueLabelYPositions(award_groups, rcs, height, 40);

      const valueLabels = award_groups.map((t, i) => ({
        text: awardTotalByTag[i],
        x: labelX[i],
        y: valueY[i]
      }));

      return { bubbles: xys, xAxisLabels, valueLabels };
    };

    const histoByPlatform = histoAttribute => {
      updateToggleButtons("#" + histoAttribute);
      // document.querySelectorAll(".button-view-toggle").forEach(e => {
      //   e.classList.remove("highlight");
      // });
      // document
      //   .querySelector("#btn-" + histoAttribute)
      //   .classList.add("highlight");

      const bubs = [...document.querySelectorAll(".bubble")];
      const tags = histos.tagGetter(bubs, histoAttribute, d => d);
      const rcs = histos.rowColGetter_dynamicColumnWidth(
        tags,
        d => d.getAttribute(histoAttribute),
        bubs,
        histos.indexGetterDiscrete(tags)
      );
      const centerX = histos.centerX(rcs, width);
      const xys = histos.xYGetter(rcs, centerX, height);
      // const labs = histos.labelMaker(tags, rcs, centerX, height);

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

      const labelX = histos.labelXPositions(awardTotalByTag, rcs, centerX);

      const xAxisLabels = tags.map((t, i) => ({
        text: t,
        x: labelX[i],
        y: height - 5
      }));

      const valueY = histos.valueLabelYPositions(tags, rcs, height, 40);

      const valueLabels = tags.map((t, i) => ({
        text: awardTotalByTag[i],
        x: labelX[i],
        y: valueY[i]
      }));

      return { bubbles: xys, xAxisLabels, valueLabels };

      // return { bubbles: xys, xAxisLabels: labs };
    };

    const drawHistogram = data => {
      const bubs = [...document.querySelectorAll(".bubble")];

      bubs.forEach((b, i) => {
        if (data[i].targetX) {
          d3.select(b)
            .attr("cx", () => data[i].targetX)
            .attr("cy", () => data[i].cy)
            .transition()
            .attr("cx", () => data[i].targetX)
            .attr("cy", () => data[i].targetY)
            .duration(i * 5);
        } else {
          d3.select(b)
            .transition()
            .attr("cx", () => data[i].cx)
            .attr("cy", () => data[i].cy)
            .duration(2000);
        }
      });
    };

    const drawAxisLabels = data => {
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

    const drawValueLabels = (data = []) => {
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

    const anims = [
      { delay: 0, dur: 0, animator: initBubbles },
      { delay: 0, dur: 0, animator: histoByYear }
      // { delay: 2000, dur: 0, animator: histoByAwardSize },
      // { delay: 2000, dur: 0, animator: () => histoByPlatform("platform") },
      // { delay: 2000, dur: 0, animator: () => histoByPlatform("granttype") }
    ];

    let state = {
      runAnimation: true,
      hasStarted: false
    };

    const animationHopper = (data, count = 0) => {
      setTimeout(() => {
        if (!state.runAnimation) return;
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

          drawHistogram(bubs);
          drawAxisLabels(updateElems.xAxisLabels);
          drawValueLabels(updateElems.valueLabels);
        }

        if (data.length > 1) {
          animationHopper(data.slice(1), ++count);
        }
      }, data[0].delay);
    };
    animationHopper(anims);

    // onStart = () => {
    //   if (!state.hasStarted) {
    //     state = { ...state, hasStarted: true };
    //     animationHopper(anims);
    //   }
    // };

    const onToggleView = viewTarget => {
      state = { runAnimation: false };

      let updateElems;

      switch (viewTarget) {
        case "year":
          updateElems = histoByYear();
          break;
        case "award":
          updateElems = histoByAwardSize();
          break;
        case "platform":
          updateElems = histoByPlatform("platform");
          break;
        case "granttype":
          updateElems = histoByPlatform("granttype");
          break;
      }

      if (updateElems) {
        drawHistogram(updateElems.bubbles);
        drawAxisLabels(updateElems.xAxisLabels);
        drawValueLabels(updateElems.valueLabels);
      }
    };
  },
  false
);
