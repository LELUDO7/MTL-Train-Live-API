// File name    : consists.controller.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : controller of train consists

import * as svc from "../services/consists.service.js";

export async function list(req, res, next) {
  const line = req.headers["x-consists-line"];
  const dateStr = req.headers["x-consists-date"];
  try {
    const data = await svc.listConsists(line, dateStr);
    if (data.status) {
      res.status(400).json({
        error: "Bad Request",
        route: req.originalUrl,
        method: req.method,
        Detail: data.detail,
      });
    } else {
      res.json(data);
    }
  } catch (e) {
    next(e);
  }
}
