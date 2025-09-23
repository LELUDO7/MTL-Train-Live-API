// File name    : train.exp.route.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : all trains sub route

import { Router } from "express";
import stations from "./stations.trains.exo.route.js";
import rails from "./rails.trains.exo.route.js";

const router = Router();

router.use("/stations", stations);
router.use("/rails", rails);

export default router;