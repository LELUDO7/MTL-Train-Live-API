// File name    : stations.trains.exo.route.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : stations route of trains

import { Router } from "express";
import { list } from "../controllers/stations.controller.js";

const r = Router();

r.get("/", list);

export default r;