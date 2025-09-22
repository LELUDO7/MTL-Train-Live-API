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

function isAllowedOrigin(origin) {
  if (!origin) return true; // Postman/curl
  return WHITELIST.has(origin);
}

// --- 2) Middleware CORS minimaliste et robuste ---
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (isAllowedOrigin(origin)) {
    // Autoriser l'origine exacte (pas de '*', sinon ça casse avec credentials)
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");

    // Méthodes autorisées
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

    // Autoriser exactement ce que le navigateur demande pendant le pré-vol
    const reqHeaders = req.headers["access-control-request-headers"];
    res.setHeader(
      "Access-Control-Allow-Headers",
      reqHeaders ? reqHeaders : "Content-Type, Authorization, x-api-key"
    );

    // Mets true seulement si tu utilises cookies/Authorization cross-site
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Max-Age", "600"); // optionnel: mise en cache du pré-vol
  }

  // Répondre immédiatement aux pré-vols
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  next();
});

//This is for the local testing with the Web live map project 
if (env.dev) {
    app.use(cors({ origin: "http://127.0.0.1:5500" }));
} 

// routes
app.use("/api/", routes);

// 404 & errors
app.use(notFound);
app.use(errorHandler);

export default app;