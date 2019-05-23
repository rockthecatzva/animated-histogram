const csvFilePath = "src/data/scripts/data.csv";
const csv = require("csvtojson");

console.log("Here")

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */
  });

// Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);

