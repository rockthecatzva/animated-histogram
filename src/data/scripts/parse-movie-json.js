const csvFilePath = "src/data/scripts/data.csv";
const csv = require("csvtojson");
const fs = require("fs");

const genreMapping = {
  Action: "Action/Adventure",
  "Action / Adventure": "Action/Adventure",
  "Action / Crime": "Action/Adventure",
  "Action Comedy": "Action/Adventure",
  "Action Drama": "Action/Adventure",
  "Action Fantasy": "Action/Adventure",
  "Action Horror": "Action/Adventure",
  "Action Thriller": "Action/Adventure",
  Adventure: "Action/Adventure",
  Animation: "Animation/Family",
  Comedy: "Comedy",
  "Comedy / Drama": "Comedy",
  "Comedy Thriller": "Comedy",
  Concert: "Other",
  Crime: "Other",
  "Crime Comedy": "Other",
  "Crime Drama": "Other",
  "Crime Thriller": "Other",
  Documentary: "Other",
  Drama: "Other",
  "Drama / Thriller": "Other",
  Family: "Animation/Family",
  "Family Adventure": "Animation/Family",
  "Family Comedy": "Animation/Family",
  Fantasy: "Sci-Fi/Fantasy",
  "Fantasy Drama": "Sci-Fi/Fantasy",
  Foreign: "Other",
  "Historical Drama": "Other",
  "Historical Epic": "Other",
  Horror: "Horror",
  "Horror Comedy": "Horror",
  "Horror Thriller": "Horror",
  "Music Drama": "Other",
  Musical: "Other",
  "Period Action": "Action/Adventure",
  "Period Adventure": "Action/Adventure",
  Romance: "Romance",
  "Romantic Comedy": "Romance",
  "Romantic Thriller": "Action/Adventure",
  "Sci-Fi": "Sci-Fi/Fantasy",
  "Sci-Fi Action": "Sci-Fi/Fantasy",
  "Sci-Fi Adventure": "Sci-Fi/Fantasy",
  "Sci-Fi Comedy": "Sci-Fi/Fantasy",
  "Sci-Fi Fantasy": "Sci-Fi/Fantasy",
  "Sci-Fi Horror": "Sci-Fi/Fantasy",
  "Sci-Fi Thriller": "Sci-Fi/Fantasy",
  "Sports Comedy": "Comedy",
  "Sports Drama": "Other",
  Thriller: "Horror",
  Unknown: "Other",
  War: "Other",
  "War Drama": "Other",
  Western: "Action/Adventure",
  "Western Comedy": "Action/Adventure"
};

const ratingMapping = {
  "PG-13": "PG-13",
  PG: "PG",
  R: "R",
  G: "G",
  "Not Yet Rated": "Unrated",
  Unrated: "Unrated",
  "": "Unrated"
};

// const studioMapping = {
//   BV: "Buena Vista",
//   "Uni.": "Universal",
//   "WB (NL)": "Warner Bros.",
//   WB: "Warner Bros.",
//   "LG/S": "Lionsgate",
//   STX: "STX Entertainment",
//   Fox: "20th Century Fox",
//   LGF: "Lionsgate",
//   Sony: "Sony",
//   "Par.": "Paramount",
//   SGem: 17,
//   UAR: 3,
//   FUN: 1,
//   MGM: 3,
//   PFR: "Other",
//   Orion: 1,
//   Aviron: 4,
//   Focus: 19,
//   BST: 3,
//   PNT: 4,
//   Neon: 4,
//   "RAtt.": "Other",
//   CMC: "Other",
//   A24: "Other",
//   VPD: "Other",
//   FoxS: 13,
//   PackYourBag: "Other",
//   ENTMP: 3,
//   "Shrts.": 1,
//   Fathom: 10,
//   FIP: 4,
//   "Relbig.": 1,
//   SPC: 2,
//   CJ: 1,
//   IFC: 2,
//   Briarcliff: 1,
//   EOne: 1,
//   Spanglish: 1,
//   "Magn.": 1,
//   MBox: 1,
//   "Indic.": 1,
//   Annapurna: 1,
//   "Studio 8": 2,
//   TriS: 11,
//   "Wein.": 13,
//   ORF: 9,
//   "W/Dim.": 2,
//   BG: 1,
//   "Rela.": 13,
//   Free: "Other",
//   FD: "Other",
//   CBS: "Other",
//   "P/DW": "Other",
//   RM: "Other"
// };

const scrapedData = require("./appended-dat.json")
  .map(data => {
    if (data) {
      const {
        name,
        studio,
        gross,
        numTheaters,
        openDate,
        thumbnail,
        genre,
        duration,
        mpaaRating,
        budget
      } = data;

      //immeditaley invoked
      const formattedDuration = (([hrs, mins]) =>
        hrs && mins ? parseInt(hrs) * 60 + parseInt(mins) : undefined)(
        duration
          .replace("Runtime: ", "")
          .replace(" ", "")
          .replace("min.", "")
          .split("hrs.")
      );

      return {
        name,
        studio,
        gross,
        numTheaters,
        openDate,
        duration: formattedDuration,
        year: parseInt(openDate.split("/")[2]),
        thumbnail,
        genre: genreMapping[genre] || "Other",
        mpaaRating: ratingMapping[mpaaRating.replace("MPAA Rating: ", "")],
        budget: budget.replace("Production Budget: ", "")
      };
    }

    return undefined;
  })
  .filter(d => d !== undefined)
  .sort((a, b) => (a.gross < b.gross ? 1 : -1))
  .slice(0, 500);//lets only do top 400 now???

console.log(scrapedData);

fs.writeFileSync(
  "src/data/scripts/scraped-movie-data.json",
  JSON.stringify(scrapedData)
);

//write a csv too...
// var file = fs.createWriteStream("src/data/scripts/scraped-movie-data.csv");
// file.on("error", function(err) {
//   /* error handling */
//   console.log("Error, yo");
// });
// scrapedData.forEach(function(v) {
//   file.write(
//     `"${v.name}","${v.studio}",${v.gross},${v.numTheaters},"${v.openDate}", ${
//       v.year
//     }, "${v.thumbnail !== undefined ? v.thumbnail : ""}", "${v.genre}", ${
//       v.duration
//     }, "${v.mpaaRating}", ${v.budget}\n`
//   );
// });
// file.end();
