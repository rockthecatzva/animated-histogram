const csvFilePath = "src/data/scripts/data.csv";
const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    const formattedJson = jsonObj.map(d => ({
      ...d,
      dollar_value: parseInt(d.dollar_value)
    }));

    console.log("Writing file");
    fs.writeFileSync("data.json", JSON.stringify(formattedJson));
  });
