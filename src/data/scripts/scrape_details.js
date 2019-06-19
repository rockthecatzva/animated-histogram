const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

//couldve just required the json infile
const infile = "src/data/scripts/scraped-movie-data.json"; //"src/data/scripts/temp.json";
const outfile = "src/data/scripts/appended-dat.json";
const jsonData = fs.readFileSync(infile);
const scrapedData = JSON.parse(jsonData);

const url = "https://www.boxofficemojo.com/movies/?id=marvel2019.htm";

const proms = scrapedData.map(movieData => {
  return axios
    .get(`https://www.boxofficemojo.com${movieData.href}`)
    .then(response => {
      const $ = cheerio.load(response.data);
      const thumbnail = $("td a img").attr("src");
      const genre = $('tr[bgcolor="#ffffff"] td[valign="top"]')
        .eq(2)
        .find("b")
        .text();
      const duration = $('tr[bgcolor="#ffffff"] td[valign="top"]')
        .eq(3)
        .text();
      const mpaaRating = $('tr[bgcolor="#ffffff"] td[valign="top"]')
        .eq(4)
        .text();
      const budget = $('tr[bgcolor="#ffffff"] td[valign="top"]')
        .eq(5)
        .text();

      return {
        ...movieData,
        thumbnail,
        genre,
        duration,
        mpaaRating,
        budget
      };
    })
    .catch(error => console.log("There was an error", error));
});

Promise.all(proms)
  .then(data => {
    console.log("all done");
    fs.writeFileSync(outfile, JSON.stringify(data));
  })
  .catch(err => console.log("there was an eror", err));
