import * as svc from "../services/trains.service.js";


export function list(req, res, next) {
  try {
    res.json(svc.listTrains());
  } catch (e) { next(e); }
}