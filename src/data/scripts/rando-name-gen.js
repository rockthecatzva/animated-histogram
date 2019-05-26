const csvFilePath = "src/data/scripts/words.csv";
var fs = require("fs");

const numTiles = 440;

fs.readFile(csvFilePath, "utf8", function(err, data) {
  if (err) throw err;

  const words = data
    .split(",")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1));

  let titles = [];

  for (var i = 0; i <= numTiles; i++) {
    const numWords = Math.round(Math.random() * 4) + 2;
    let title = "";

    for (var b = 0; b <= numWords; b++) {
      title +=
        (b !== 0 ? " " : "") + words[Math.round(Math.random() * words.length)];
    }
    titles.push(title);
  }

  var file = fs.createWriteStream("src/data/scripts/titles.txt");
  file.on("error", function(err) {
    /* error handling */
  });
  titles.forEach(function(v) {
    console.log(v);
    file.write(v + "\n");
  });
  file.end();
  //   console.log(words);
});
