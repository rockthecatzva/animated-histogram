//HanoverHistogramBubbles

const STANDARD_RADIUS = 4.2, //use a getter/setter?
  COL_WIDTH = 5, //use a getter/setter?
  PADDING = 2.9, //use a getter/setter?
  LABEL_PADDING = 3,
  HISTO_GROUP_PADDING = 6, //pegged to col_width?
  BY_PLATFORM_PADDING = 20, //pegged to col_width?
  SVG_BOTTOM_PADDING = 20;

exports.standardRadius = STANDARD_RADIUS;
exports.columnWidth = COL_WIDTH;

exports.tagGetter = (bubs, attribute, extractor) =>
  bubs
    .filter(b => b.getAttribute(attribute) !== "")
    .reduce((acc, curr) => {
      const d = extractor(curr.getAttribute(attribute));
      return acc.indexOf(d) < 0 ? [...acc, d] : acc;
    }, [])
    .sort((a, b) => a - b);

exports.countGetter = (tags, extractor, bubs) =>
  tags.map(t => {
    return bubs.filter(b => extractor(b) === t).length;
  });

exports.centerX = (rowsColsData, width) => {
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

exports.indexGetterDiscrete = tags => val => tags.indexOf(val);
exports.indexGetterRanges = ranges => val => {
  return ranges.indexOf(ranges.find(g => val >= g.min && val < g.max));
};

exports.rowColGetter_fixedColumnWidth = (
  tags,
  extractor,
  bubs,
  indexGetter
) => {
  let countsByAttribute = tags.map(t => 0);

  return bubs.map(b => {
    const attributeValue = extractor(b);
    const index = indexGetter(attributeValue);
    let col = 0,
      row = 0,
      groupOffset = index * (STANDARD_RADIUS * PADDING * HISTO_GROUP_PADDING);

    if (index >= 0) {
      col = countsByAttribute[index] % COL_WIDTH;
      row = countsByAttribute[index] / COL_WIDTH - col / COL_WIDTH;
      countsByAttribute[index] += 1;
    }



    return { row, col, groupOffset, index, attributeValue };
  });
};

exports.rowColGetter_dynamicColumnWidth = (
  tags,
  extractor,
  bubs,
  indexGetter
) => {
  let countsByAttribute = tags.map(t => 0);

  const numColsByPlat = tags.map(y =>
    Math.trunc(Math.sqrt(bubs.filter(b => extractor(b) === y).length))
  );

  return bubs.map(b => {
    const attributeValue = extractor(b);
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

    return { row, col, groupOffset, index, attributeValue };
  });
};

exports.xYGetter = (bubs, centeringX, height) =>
  bubs.map(b => {
    const cx = b.col * (STANDARD_RADIUS * PADDING) + b.groupOffset + centeringX,
    cy =
        height -
        b.row * (STANDARD_RADIUS * PADDING) -
        STANDARD_RADIUS -
        SVG_BOTTOM_PADDING;

    return { ...b, cx, cy };
  });

exports.labelMaker = (
  tags,
  rowCols,
  centeringX,
  height,
  fixedColWidth = undefined
) =>
  tags.map((t, i) => {
    const groupOffset = rowCols.find(rc => rc.index === i).groupOffset,
      numCols = fixedColWidth
        ? fixedColWidth
        : rowCols
            .filter(b => b.index === i)
            .map(b => b.col)
            .reduce((acc, curr) => (curr > acc ? curr : acc)),
      histoColCenter = (numCols / 2) * STANDARD_RADIUS * PADDING;

    return {
      text: t,
      y: height - LABEL_PADDING,
      x: groupOffset + centeringX + histoColCenter
    };
  });

exports.labelMakerValues = (
  tags,
  rowCols,
  centeringX,
  height,
  fixedColWidth = undefined
) =>
  tags.map((t, i) => {
    const groupOffset = rowCols.find(rc => rc.index === i).groupOffset,
      numCols = fixedColWidth
        ? fixedColWidth
        : rowCols
            .filter(b => b.index === i)
            .map(b => b.col)
            .reduce((acc, curr) => (curr > acc ? curr : acc)),
      histoColCenter = (numCols / 2) * STANDARD_RADIUS * PADDING,
      maxH = rowCols.filter(r => r.index === i).reduce((acc, curr) => {
        if (curr.row > acc) {
          return curr.row;
        }
        return acc;
      }, 0);

    

    return {
      text: t,
      y: height - maxH * STANDARD_RADIUS * PADDING - 40,
      x: groupOffset + centeringX + histoColCenter
    };
  });

exports.labelXPositions = (
  tags,
  rowCols,
  centeringX,
  fixedColWidth = undefined
) =>
  tags.map((t, i) => {
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

exports.valueLabelYPositions = (tags, rowCols, height, gapSpace = 40) => //IS HEIGHT EVEN NECESSARY??
  tags.map((t, i) => {
    const maxH = rowCols.filter(r => r.index === i).reduce((acc, curr) => {
      if (curr.row > acc) {
        return curr.row;
      }
      return acc;
    }, 0);

    

    return height - maxH * STANDARD_RADIUS * PADDING - gapSpace;
  });
