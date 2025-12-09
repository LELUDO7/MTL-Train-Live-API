// File name    : consists.trains.exo.route.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : stations route of trains

import { Router } from "express";
import { list } from "../controllers/consists.controller.js";

const r = Router();

r.get("/", list);

export default r;