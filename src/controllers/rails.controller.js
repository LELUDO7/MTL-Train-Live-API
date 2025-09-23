// File name    : rails.controller.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : controller of train rails

import * as svc from "../services/rails.service.js";

export function list(req, res, next) {
  try {
    res.json(svc.listRails());
  } catch (e) { next(e); }
}