// File name    : app.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : app use 

import express from "express";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/error.js";
import routes from "./routes/route.js";
import { env } from "./config/env.js";

const app = express();

// gobale middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const WHITELIST = new Set([
  "http://map.mtltrainlive.com",
  "http://localhost:5173",
  "http://localhost:3000",
]);

//This is for the local testing with the Web live map project 
if (env.dev) {
    app.use(cors({ origin: "http://127.0.0.1:5500"  }));
} else {
    app.use(cors({ origin: "http://map.mtltrainlive.com" }));
}

// routes
app.use("/api/", routes);

// 404 & errors
app.use(notFound);
app.use(errorHandler);

export default app;