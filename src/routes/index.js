import { Router } from "express";
import stations from "./stations.route.js";

const router = Router();

router.use("/stations", stations);

export default router;