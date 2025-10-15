// File name    : stations.controller.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : controller of train staions

import * as svc from "../services/stations.service.js";

export function list(req, res, next) {
  const trainInfo = req.headers["x-train_info"];

  
  if (trainInfo == "True" || trainInfo == "true") {
    try {
      res.json(svc.listStations(true));
    } catch (e) {
      next(e);
    }
  } else {
    try {
      res.json(svc.listStations(false));
    } catch (e) {
      next(e);
    }
  }

  
}
