const STANDARD_RADIUS = 4.2, //use a getter/setter?
  COL_WIDTH = 5, //use a getter/setter?
  PADDING = 2.9, //use a getter/setter?
  LABEL_PADDING = 3,
  HISTO_GROUP_PADDING = 6, //pegged to col_width?
  BY_PLATFORM_PADDING = 20, //pegged to col_width?
  SVG_BOTTOM_PADDING = 20;

exports.standardRadius = STANDARD_RADIUS;
// exports.columnWidth = COL_WIDTH;

exports.histogramFixedWidthDiscreteValues = (
  data,
  propName,
  height,
  width,
  labelFormatter
) => {
  //get a unique list of tags used in data
  const tags = _getUniqueLabels(data.map(d => d.year));
  const rcs = _getRowColsFixedColumnWidth(
    tags,
    propName, //"year",
    data,
    _getGroupIndexDiscreteValues(tags)
  );
  //3. figure out how much spacing we need to center the graph
  const centerX = _getCenterX(rcs, width);
  //use the row/col to calc an x and y position
  const bubblePositions = _getTargetXYs(rcs, centerX, height);
  const labelX = _getXLabelPositions(
    ///THIS IS UN TESTED!!
    tags.length,
    rcs,
    centerX,
    COL_WIDTH - 1 //might want this to be passed in now
  );

  const xAxisLabels = tags.map((t, i) => ({
    text: t,
    x: labelX[i],
    y: height - 5 //make 5 a var?
  }));

  const valueY = _getValueLabelPositions(tags, rcs, height, 40); //make 40 a var

  const formattedLabels = tags.map(t => labelFormatter(t));

  const valueLabels = tags.map((t, i) => ({
    text: formattedLabels[i], //these could be optional?
    x: labelX[i],
    y: valueY[i]
  }));

  return {
    bubblePositions,
    xAxisLabels,
    valueLabels
  };
};

exports.histogramFixedWidthRangeValues = (
  data,
  propName,
  height,
  width,
  formattedLabels,
  groupingData
) => {
  const rcs = _getRowColsFixedColumnWidth(
    groupingData,
    propName,
    data,
    _getGroupIndexRangeValues(groupingData)
  );
  const centerX = _getCenterX(rcs, width);
  const bubblePositions = _getTargetXYs(rcs, centerX, height);
  // const indexGetter = exports.indexGetterRanges(groupingData);
  const labelX = _getXLabelPositions(
    groupingData.length,
    rcs,
    centerX,
    COL_WIDTH - 1
  );
  const xAxisLabels = groupingData
    .map(a => a.label)
    .map((t, i) => ({
      text: t,
      x: labelX[i],
      y: height - 5 //make this var?
    }));
  const valueY = _getValueLabelPositions(
    groupingData,
    rcs,
    height,
    40 //make this a variable?
  );

  const valueLabels = groupingData.map((t, i) => ({
    text: formattedLabels[i],
    x: labelX[i],
    y: valueY[i]
  }));

  return {
    bubblePositions,
    xAxisLabels,
    valueLabels
  };
};

exports.histogramDynamicWidthDiscreteValues = (
  data,
  propName,
  height,
  width,
  labelFormatter
) => {
  const tags = _getUniqueLabels(data.map(d => d[propName]));
  const rcs = _getRowColsDynamicColumnWidth(
    tags,
    propName,
    data,
    _getGroupIndexDiscreteValues(tags)
  );
  const centerX = _getCenterX(rcs, width);
  const bubblePositions = _getTargetXYs(rcs, centerX, height);
  const labelX = _getXLabelPositions(tags.length, rcs, centerX);
  const xAxisLabels = tags.map((t, i) => ({
    text: t,
    x: labelX[i],
    y: height - 5
  }));

  const valueY = _getValueLabelPositions(tags, rcs, height, 40);
  const formattedLabels = tags.map(t => labelFormatter(t));
  const valueLabels = tags.map((t, i) => ({
    text: formattedLabels[i],
    x: labelX[i],
    y: valueY[i]
  }));

  return {
    bubblePositions,
    xAxisLabels,
    valueLabels
  };
};

//MIGHT BE ONE OF THE FEW FUNCS THAT NEEDS TO BE PUBLIC???
const _getUniqueLabels = data =>
  data
    .reduce((acc, curr) => {
      return acc.indexOf(curr) < 0 ? [...acc, curr] : acc;
    }, [])
    .sort((a, b) => a - b);

// exports.countGetter = (tags, extractor, bubs) =>
//   tags.map(t => {
//     return bubs.filter(b => extractor(b) === t).length;
//   });

const _getCenterX = (rowsColsData, width) => {
  const maxIndex = rowsColsData.reduce(
    (acc, curr) => (curr.index > acc ? curr.index : acc),
    0
  );
  const offset = rowsColsData.find(b => b.index === maxIndex).groupOffset;
  const numCols = rowsColsData
    .filter(b => b.index === maxIndex)
    .map(b => b.col)
    .reduce((acc, curr) => (curr > acc ? curr : acc));

  //offset of the last group, col-position of last group
  return (width - (offset + numCols * STANDARD_RADIUS * PADDING)) / 2;
};

const _getGroupIndexDiscreteValues = tags => val => tags.indexOf(val);
const _getGroupIndexRangeValues = ranges => val => {
  return ranges.indexOf(ranges.find(g => val >= g.min && val < g.max));
};

const _getRowColsFixedColumnWidth = (tags, attribute, data, indexGetter) => {
  let countsByAttribute = tags.map(t => 0);

  return data.map(b => {
    const attributeValue = b[attribute];
    const index = indexGetter(attributeValue);
    let col = 0,
      row = 0,
      groupOffset = index * (STANDARD_RADIUS * PADDING * HISTO_GROUP_PADDING);

    if (index >= 0) {
      col = countsByAttribute[index] % COL_WIDTH;
      row = countsByAttribute[index] / COL_WIDTH - col / COL_WIDTH;
      countsByAttribute[index] += 1;
    }

    return { ...b, row, col, groupOffset, index, attributeValue };
  });
};

const _getRowColsDynamicColumnWidth = (
  tags,
  attribute,
  bubs,
  indexGetter
) => {
  let countsByAttribute = tags.map(t => 0);

  const numColsByPlat = tags.map(y =>
    Math.trunc(Math.sqrt(bubs.filter(b => b[attribute] === y).length))
  );

  return bubs.map(b => {
    const attributeValue = b[attribute];
    const index = indexGetter(attributeValue);
    let col = 0,
      row = 0,
      groupOffset =
        numColsByPlat.slice(0, index).reduce((acc, curr) => acc + curr, 0) *
          STANDARD_RADIUS *
          PADDING +
        index * BY_PLATFORM_PADDING;

    if (index >= 0) {
      col = Math.round(countsByAttribute[index] % numColsByPlat[index]);
      row = Math.round(
        countsByAttribute[index] / numColsByPlat[index] -
          col / numColsByPlat[index]
      );
      countsByAttribute[index] += 1;
    }

    return { ...b, row, col, groupOffset, index, attributeValue };
  });
};

const _getTargetXYs = (bubs, centeringX, height) =>
  bubs.map(b => {
    const targetX =
        b.col * (STANDARD_RADIUS * PADDING) + b.groupOffset + centeringX,
      targetY =
        height -
        b.row * (STANDARD_RADIUS * PADDING) -
        STANDARD_RADIUS -
        SVG_BOTTOM_PADDING;

    return { ...b, targetX, targetY };
  });

const _getXLabelPositions = (
  numTags,
  rowCols,
  centeringX,
  fixedColWidth = undefined
) =>
  [...Array(numTags)].map((t, i) => {
    const groupOffset = rowCols.find(rc => rc.index === i).groupOffset,
      numCols = fixedColWidth
        ? fixedColWidth
        : rowCols
            .filter(b => b.index === i)
            .map(b => b.col)
            .reduce((acc, curr) => (curr > acc ? curr : acc)),
      histoColCenter = (numCols / 2) * STANDARD_RADIUS * PADDING;

    return groupOffset + centeringX + histoColCenter;
  });

const _getValueLabelPositions = (
  tags,//doesnt really need actual tags- see numtags above
  rowCols,
  height,
  gapSpace = 40 //IS HEIGHT EVEN NECESSARY??
) =>
  tags.map((t, i) => {
    const maxH = rowCols
      .filter(r => r.index === i)
      .reduce((acc, curr) => {
        if (curr.row > acc) {
          return curr.row;
        }
        return acc;
      }, 0);

    return height - maxH * STANDARD_RADIUS * PADDING - gapSpace;
  });
