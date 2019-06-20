const data = require("./scraped-movie-data.json");
// console.log(data)

const getUnique = prop => {
  let tags = {};
  //couldve used  reduce here
  data.forEach(movie => {
    // console.log(movie[prop], movie.prop, tags[movie[prop]]);
    if (tags[movie[prop]] !== undefined) {
      tags = { ...tags, [movie[prop]]: tags[movie[prop]] + 1 };
    } else {
      tags = { ...tags, [movie[prop]]: 1 };
    }
  });

  return tags;
};

console.log(getUnique("genre"));

console.log(getUnique("mpaaRating"));

const durs = data.map(d => d.duration).filter(d => typeof d === "number");
const durRange = [Math.min(...durs), Math.max(...durs)];
console.log(durRange);
//80 - 194

const grossRange = [
  Math.min(...data.map(d => d.gross)),
  Math.max(...data.map(d => d.gross))
];
console.log(grossRange);

grosss = data.map(d => d.gross);
// const grossCts = grosss.reduce(
//   (acc, curr) => {
//     // console.log(acc);
//     let n;
//     if (curr < 47000000) {
//       return { ...acc, 0: (acc[0] += 1) };
//     }
//     if (curr < 57000000) {
//       return { ...acc, 1: (acc[1] += 1) };
//     }
//     if (curr < 72000000) {
//       return { ...acc, 2: (acc[2] += 1) };
//     }
//     if (curr < 101000000) {
//       return { ...acc, 3: (acc[3] += 1) };
//     }
//     if (curr < 139000000) {
//       return { ...acc, 4: (acc[4] += 1) };
//     }
//     if (curr < 140000000) {
//       return { ...acc, 4: (acc[4] += 1) };
//     }
//     return acc;
//   },
//   { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
// );
// console.log(grossCts);
// 39,322,544 - 936,662,225 = 897,339,681 / 7 = 128,191,383
const getAverage = set => set.reduce((acc, curr) => acc + curr, 0) / set.length;

const avg = getAverage(grosss); // grosss.reduce((acc, curr) => acc + curr, 0) / grosss.length;
// console.log(avg);

// console.log(centroids);
const numGroups = 7;
let centroids = [...Array(numGroups)].map(v => avg);
const ct = Math.floor(grosss.length / numGroups);

let centroidSet = centroids.map((c, i) => {
  let start = i * ct;
  let stop = start + ct;
  let values;
  if (i < numGroups - 1) {
    values = grosss.slice(start, stop);
  } else {
    values = grosss.slice(start);
  }
  let average = getAverage(values);
  //   Math.round(
  //     values.reduce((acc, curr) => acc + curr, 0) / (stop - start)
  //   );
  return { values, average };
});

// console.log("initial set: ", centroidSet);

const clusterAdjustments = 25;

for (let i = 0; i < clusterAdjustments; i++) {
  //go thru each point
  //calc distance between each cluster avg
  //if another cluster is closer => move it there and re calc the avg

  //go thru each point
  grosss.forEach((pt, i) => {
    //find the cluster with the closest average
    const closestCluster = centroidSet.reduce((acc, curr) =>
      Math.abs(curr.average - pt) < Math.abs(acc.average - pt) ? curr : acc
    );

    //if this is not the same cluster it's already in - then adjust!
    const isNewCluster =
      closestCluster.values.find(v => v === pt) === undefined;

    if (isNewCluster) {
      const closestClusterPosition = centroidSet.findIndex(
        c => c.average === closestCluster.average
      );

      const oldCluster = centroidSet.find(
        c => c.values.find(v => v === pt) !== undefined
      );
      const oldClusterPosition = centroidSet.findIndex(
        c => c.values.find(cv => cv === pt) !== undefined
      );

      const oldClusterValuePosition = oldCluster.values.findIndex(
        cv => cv === pt
      ); //we cant use filter because there could be duplicate values that would also be removed!

      //remove the oldCluster and newCluster from the set
      centroidSet = centroidSet.filter(
        (v, i) => i !== closestClusterPosition && i !== oldClusterPosition
      );

      //remove the pt from oldCluster and recalc average
      centroidSet.push({
        values: oldCluster.values.filter(
          (v, i) => i !== oldClusterValuePosition
        ),
        average: getAverage(
          oldCluster.values.filter((v, i) => i !== oldClusterValuePosition)
        )
      });

      //add pt to new cluster and recalc avg
      const newSet = [...closestCluster.values, pt];
      centroidSet.push({
        values: newSet,
        average: getAverage(newSet)
      });
      //   console.log("Changing");
    }

    // console.log(
    //   "------- check in:",
    //   i,
    //   centroidSet.map(c => c.values),
    //   centroidSet.reduce((acc, curr) => acc + curr.values.length, 0)
    // );
  });
}

centroidSet.forEach(c => {
  console.log(Math.max(...c.values), Math.min(...c.values));
});
