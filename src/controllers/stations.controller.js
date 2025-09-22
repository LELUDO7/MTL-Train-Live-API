// File name    : stations.controller.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : controller of train staions

import * as svc from "../services/stations.service.js";

export function list(req, res, next) {
  try {
    res.json(svc.listStations());
  } catch (e) { next(e); }
}