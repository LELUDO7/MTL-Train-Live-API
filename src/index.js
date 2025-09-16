// File name    : index.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : Main file

// src/index.js
import { green, blue, cyan } from 'colorette';
import * as text from './utils/text.js';
import { startExoFetcher } from "./exoFetcher/exoApi.js";
import cors from "cors";
import app from "./app.js";
import { log } from "./utils/logger.js";


import { env } from "./config/env.js";

app.use(cors({ origin: "http://127.0.0.1:5500" })); 

let title;

title = "MTL_Train_Live_API";

console.log(title);
console.log(blue("GitHub: https://github.com/LELUDO7/MTL-Train-Live-API"))

const server = app.listen(env.port, () => {
  log.info(`API listening on http://localhost:${env.port}`);
});

startExoFetcher();


const stop = (signal) => {
  log.info(`${signal} received, shutting down...`);
  server.close(() => {
    log.info("HTTP server closed");
    process.exit(0);
  });
};




