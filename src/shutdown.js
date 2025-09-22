// File name    : shutdown.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : shutdown process live here

import {log} from "./utils/logger.js"

export function stop(server) {
  log.info(`Shutting down...`);
  server.close(() => {
    log.info("HTTP server closed");
    process.exit(0);
  });

};