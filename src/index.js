// File name    : index.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : Main file

// src/index.js
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { green, blue, cyan } from 'colorette';
import * as text from './utils/text.js';
import * as utils from './utils/utils.js';
import dotenv from 'dotenv';
import { startExoFetcher } from "./exoFetcher/exoApi.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

if (!process.env.PORT) {
  console.error('❌ PORT Variable missing in .env');
  process.exit(1);
}

const PORT = Number(process.env.PORT);
const app = express();
let title;

main();



async function main() {
  title = await text.createTitle();

  console.log(title);
  console.log(blue("GitHub: https://github.com/LELUDO7/MTL-Train-Live-API"))

  app.get("/", (req, res) => {
    res.send(title);
  });
  
  app.listen(PORT, () => {
    console.log(cyan(`Listening on port: ${PORT}`));
    console.log(green("API running..."));
  });

  startExoFetcher();
  
}