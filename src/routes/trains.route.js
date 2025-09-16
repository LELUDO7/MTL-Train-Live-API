import { Router } from "express";
import { list } from "../controllers/trains.controller.js";

const r = Router();

r.get("/", list);

export default r;