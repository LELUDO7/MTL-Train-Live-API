// File name    : consists.controller.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : controller of train consists

import * as svc from "../services/consists.service.js";

export async function list(req, res, next) {
  const line = req.headers["x-consists-line"];
  try {
    const data = await svc.listConsists(line);
    if (data.status) {
      res.status(400).json({
        error: "Bad Request",
        route: req.originalUrl,
        method: req.method,
        Detail: `The line ${line} does not exist please refer to the documention.`,
      });
    } else {
      res.json(data);
    }
  } catch (e) {
    next(e);
  }
}
