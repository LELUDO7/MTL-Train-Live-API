// File name    : error.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : error

// 404
export function notFound(req, res, next) {
  res.status(404).json({ error: "Not Found" });
}

export function errorHandler(err, req, res, next) {
  const status = err.status ?? 500;
  const message = err.message ?? "Internal Server Error";
  if (status >= 500) {
  
  }
  res.status(status).json({ error: message });
}