// File name    : movings.trains.exo.route.js
// Created by   : Ludovic Fournier
// Created date : 14-01-2026
// Description  : movings route of trains

import { Router } from "express";
import { list } from "../controllers/movings.controller.js";

const r = Router();

r.get("/", list);

export default r;