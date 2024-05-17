import express from "express";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your url",
      name: "URL",
    },
  ])
  .then((ans) => {
    const url = ans.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("url.text", url, (err) => {
      if (err) throw err("err");
      else {
        console.log("this file has been saved!");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

/*
const app = exprezs();
const PORT = 4040;

app.get("/", async (req, res) => {
  const text = request.query.text;

  !text
    ? res.status(400).send("404 ! Please enetr a valid response")
    : await qrcode.toDataURL(text, (err, url) => {
        res.send(url);
      });
});

app.listen(PORT, () => console.log("Server is up and running on ", PORT));
*/
