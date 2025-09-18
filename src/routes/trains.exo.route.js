import { Router } from "express";
import stations from "./stations.trains.exo.route.js";

const router = Router();

router.use("/stations", stations);

export default router;