import { Router } from "express";
import trains from "./trains.route.js";

const router = Router();

router.use("/trains", trains);

export default router;