// File name    : app.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : app use

import express from "express";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/error.js";
import routes from "./routes/route.js";
import { env } from "./config/env.js";
import { ALLOWEDORIGINSDEV, ALLOWEDORIGINSPROD } from "../config.js";

const app = express();

// gobale middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//This is for the local testing with the Web live map project

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization", "train_info"],
  })
);

// routes
app.use("/api/", routes);

// 404 & errors
app.use(notFound);
app.use(errorHandler);

export default app;
