// File name    : index.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : Main file

const express = require("express");
const text = require("./utils/text");
const { green,blue , bold, underline } = require("colorette");
const utils = require("./utils/utils")

const app = express();
const PORT = 3000;

var title;

main();


app.get("/", (req, res) => {
  res.send(title);
});

app.listen(PORT, () => {
  console.log(`Serveur en cours sur http://localhost:${PORT}`);
});


async function main() {
  title = await text.createTitle();

  console.log(title);
  console.log(blue("GitHub : https://github.com/LELUDO7/MTL-Train-Live-API"))
  console.log(blue(`Project branch : ${utils.getCurrentBranch()}`));
  console.log(green("API running..."))
}