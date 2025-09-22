// File name    : route.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : main route file

import { Router } from "express";
import trains from "./trains.exo.route.js";

const router = Router();

router.use("/exo/trains", trains);

export default router;