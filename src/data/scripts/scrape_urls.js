const axios = require("axios");
const cheerio = require("cheerio");
var fs = require("fs");

const years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

const removeCommasMakeInt = str => parseInt(str.replace(/([$,])+/gm, ""), 10);

const axProms = years.map(yr =>
  axios.get(
    `https://www.boxofficemojo.com/yearly/chart/?yr=${yr}&view=releasedate&view2=domestic&sort=gross&order=DESC&&p=.htm`
  )
);

Promise.all(axProms)
  .then(data => {
    console.log(data.length);
    const moviesByYear = years.map((yr, i) => {
      const $ = cheerio.load(data[i].data);
      let movieData = [];

      $('tr[bgcolor="#ffffff"], tr[bgcolor="#f4f4ff"]').each((i, elem) => {
        const boxName = $(elem)
          .find("a")
          .eq(0);
        const href = boxName.attr("href");
        const name = boxName.text();

        const studio = $(elem)
          .find("td font")
          .eq(2)
          .text();

        const gross = removeCommasMakeInt(
          $(elem)
            .find("td font b")
            .text()
        );

        const numTheaters = removeCommasMakeInt(
          $(elem)
            .find("td font")
            .eq(4)
            .text()
        );

        const openDate =
          $(elem)
            .find("td font")
            .eq(7)
            .text() + `/${yr}`;

        movieData.push({ href, name, studio, gross, numTheaters, openDate });
      });
      return movieData;
    });

    // const t = moviesByYear.reduce((acc,curr)=>[...acc, ...curr]);
    // console.log(t.length);

    // var file = fs.createWriteStream("src/data/scripts/scraped-movie-data.csv");
    // file.on("error", function(err) {
    //   /* error handling */
    //   console.log("Error, yo");
    // });
    // moviesByYear
    //   .reduce((acc, curr) => [...acc, ...curr])
    //   .forEach(function(v) {
    //     file.write(
    //       `"${v.name}",${v.href},"${v.studio}",${removeCommasMakeInt(
    //         v.gross
    //       )},${removeCommasMakeInt(v.numTheaters)},${v.openDate}\n`
    //     );
    //   });
    // file.end();
    const stackedData = moviesByYear.reduce((acc, curr) => [...acc, ...curr]);
    fs.writeFileSync("src/data/scripts/scraped-movie-data.json", JSON.stringify(stackedData));
  })
  .catch(error => {
    console.log("there was an error");
  });

// axios
//   .get(url)
//   .then(response => {
//     console.log("Got data", yr);
//     const $ = cheerio.load(response.data);

//     $('tr[bgcolor="#ffffff"], tr[bgcolor="#f4f4ff"]').each((i, elem) => {
//       const boxName = $(elem)
//         .find("a")
//         .eq(0);
//       const href = boxName.attr("href");
//       const name = boxName.text();

//       const studio = $(elem)
//         .find("td font")
//         .eq(2)
//         .text();

//       const gross = $(elem)
//         .find("td font b")
//         .text();

//       const numTheaters = $(elem)
//         .find("td font")
//         .eq(4)
//         .text();

//       const openDate = $(elem)
//         .find("td font")
//         .eq(7)
//         .text();

//       movieData.push({ href, name, studio, gross, numTheaters, openDate });
//     });
//   })
//   .catch(err => {
//     console.log("there was an error");
//   });
