const csvFilePath = "src/data/scripts/data.csv";
const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    const formattedJson = jsonObj.map(d => ({
      ...d,
      ticket_sales: parseInt(d.ticket_sales)
    }));

    console.log("Writing file");
    fs.writeFileSync("data.json", JSON.stringify(formattedJson));
  });
