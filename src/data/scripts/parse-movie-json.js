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
  Animation: "Animation",
  Comedy: "Comedy",
  "Comedy / Drama": "Comedy",
  "Comedy Thriller": "Comedy",
  Concert: "Concert",
  Crime: "",
  "Crime Comedy": "",
  "Crime Drama": "",
  "Crime Thriller": "",
  Documentary: "Documentary",
  Drama: "",
  "Drama / Thriller": "",
  Family: "Family",
  "Family Adventure": "Family",
  "Family Comedy": "Family",
  Fantasy: "Fantasy",
  "Fantasy Drama": "Fantasy",
  Foreign: "Foreign",
  "Historical Drama": "",
  "Historical Epic": "",
  Horror: "Horror",
  "Horror Comedy": "Horror",
  "Horror Thriller": "Horror",
  "Music Drama": "",
  Musical: "",
  "Period Action": "Action/Adventure",
  "Period Adventure": "Action/Adventure",
  Romance: "Romance",
  "Romantic Comedy": "Romance",
  "Romantic Thriller": "",
  "Sci-Fi": "Sci-Fi",
  "Sci-Fi Action": "Sci-Fi",
  "Sci-Fi Adventure": "Sci-Fi",
  "Sci-Fi Comedy": "Sci-Fi",
  "Sci-Fi Fantasy": "Sci-Fi",
  "Sci-Fi Horror": "Sci-Fi",
  "Sci-Fi Thriller": "Sci-Fi",
  "Sports Comedy": "Comedy",
  "Sports Drama": "",
  Thriller: "",
  Unknown: "Unknown",
  War: "",
  "War Drama": "",
  Western: "Action/Adventure",
  "Western Comedy": "Action/Adventure"
};

// const infile = "src/data/scripts/scraped-movie-data.json"; //"src/data/scripts/temp.json";
const infile = "src/data/scripts/appended-dat.json";
const jsonData = fs.readFileSync(infile);
const scrapedData = JSON.parse(jsonData)
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
        genre,
        mpaaRating: mpaaRating.replace("MPAA Rating: ", ""),
        budget: budget.replace("Production Budget: ", "")
      };
    }

    return undefined;
  })
  .filter(d => d !== undefined);
console.log(scrapedData);

//write a csv too...
var file = fs.createWriteStream("src/data/scripts/scraped-movie-data.csv");
file.on("error", function(err) {
  /* error handling */
  console.log("Error, yo");
});
scrapedData.forEach(function(v) {
  file.write(
    `"${v.name}","${v.studio}",${v.gross},${v.numTheaters},"${v.openDate}", ${
      v.year
    }, "${v.thumbnail !== undefined ? v.thumbnail : ""}", "${v.genre}", ${
      v.duration
    }, "${v.mpaaRating}", ${v.budget}\n`
  );
});
file.end();
