import * as svc from "../services/stations.service.js";


export function list(req, res, next) {
  try {
    res.json(svc.listStations());
  } catch (e) { next(e); }
}