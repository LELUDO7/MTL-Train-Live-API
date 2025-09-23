// File name    : rails.trains.exo.route.js
// Created by   : Ludovic Fournier
// Created date : 23-09-2025
// Description  : rails route of trains

import { Router } from "express";
import { list } from "../controllers/rails.controller.js";

const r = Router();

r.get("/", list);

export default r;