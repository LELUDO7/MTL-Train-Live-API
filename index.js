// File name    : index.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : Main file

import readline from "readline";
import * as text from './src/utils/text.js';
import { startExoFetcher } from "./src/exoFetcher/exoApi.js";
import { log } from "./src/utils/logger.js";
import {stop} from "./src/shutdown.js"
import server from "./src/server.js";

const title = "MTL_Train_Live_API";
const titleFont = "Big";
const githubColor = "blue";

//Server title 
log.default(text.color(text.figlet(title, titleFont), "magenta"));
log.default(text.color("Made by : Ludovic Fournier", "magenta"));
log.default(text.color("GitHub: https://github.com/LELUDO7/MTL-Train-Live-API",githubColor))

startExoFetcher();

// Input in terminal 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  if (input.trim() === "stop") {
    stop(server);
  } 
  else {
    log.error(`"${input}" is not a valid input`)
  }
});





