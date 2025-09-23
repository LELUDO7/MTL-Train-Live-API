// File name    : error.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : error

import { log } from "../utils/logger.js"

// 404
export function notFound(req, res, next) {
  res.status(404).json({ 
    error: "Not Found",
    route :  req.originalUrl,
    method: req.method ,
    Detail : `The route ${req.url} does not exist please refer to the documention.`
   });
}

export function errorHandler(err, req, res, next) {
  log.error(err.stack); 

  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,       
    route: req.originalUrl,     
    method: req.method,         
  });
}