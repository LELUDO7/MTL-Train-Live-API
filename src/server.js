// File name    : server.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : server file

import app from "./app.js";
import * as text from "./utils/text.js"
import { env } from "./config/env.js";
import { log } from "./utils/logger.js"

const apiPortColor = "cyan"

const server = app.listen(env.port, () => {
  log.default(text.color(`API listening on http://localhost:${env.port}`,apiPortColor));
  if (env.dev) {
    log.default(text.color("SERVER IS RUNNING IN DEV MODE (Remove DEV in .env file to make it run in prod mode)", "red"))
  }
});

export default server;