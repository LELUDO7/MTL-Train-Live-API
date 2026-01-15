// File name    : movings.controller.js
// Created by   : Ludovic Fournier
// Created date : 14-01-2026
// Description  : controller of movings trains

import * as svc from "../services/movings.service.js";

export function list(req, res, next) {
  const trainInfo = req.headers["x-train-info"];

  
  if (trainInfo == "True" || trainInfo == "true") {
    try {
      res.json(svc.listMovingsTrains(true));
    } catch (e) {
      next(e);
    }
  } else {
    try {
      res.json(svc.listMovingsTrains(false));
    } catch (e) {
      next(e);
    }
  }

  
}
