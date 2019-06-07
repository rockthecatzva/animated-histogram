const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.boxofficemojo.com/movies/?id=marvel2019.htm"

axios
  .get(url)
  .then(response => {
    
    const $ = cheerio.load(response.data);

    const thumbnail = $('td a img').attr("src");

    const genre = $('tr[bgcolor="#ffffff"] td[valign="top"]').eq(2).find('b').text();
    const duration = $('tr[bgcolor="#ffffff"] td[valign="top"]').eq(3).text();
    const mpaaRating = $('tr[bgcolor="#ffffff"] td[valign="top"]').eq(4).text();
    const budget = $('tr[bgcolor="#ffffff"] td[valign="top"]').eq(5).text();
    
debugger
    // $('tr[bgcolor="#ffffff"], tr[bgcolor="#f4f4ff"]').each((i, elem) => {

    // //   const boxName = $(elem)
    // //     .find("a")
    // //     .eq(0);
    // //   const href = boxName.attr("href");
    // //   const name = boxName.text();

    // //   const studio = $(elem)
    // //     .find("td font")
    // //     .eq(2)
    // //     .text();

    // //   const gross = $(elem)
    // //     .find("td font b")
    // //     .text();

    // //   const numTheaters = $(elem)
    // //     .find("td font")
    // //     .eq(4)
    // //     .text();

    // //   const openDate = $(elem)
    // //     .find("td font")
    // //     .eq(7)
    // //     .text();

    // //   movieData.push({ href, name, studio, gross, numTheaters, openDate });
    // });
  })
  .catch(err => {
    console.log("there was an error");
  });