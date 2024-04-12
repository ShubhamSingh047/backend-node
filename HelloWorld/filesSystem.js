const fs = require("fs");

fs.writeFile("./text.txt", "Shubham:89551789231", (error) => {});

fs.readFile("./text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
