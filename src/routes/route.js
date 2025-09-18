import { Router } from "express";
import trains from "./trains.exo.route.js";

const router = Router();

router.use("/exo/trains", trains);

export default router;