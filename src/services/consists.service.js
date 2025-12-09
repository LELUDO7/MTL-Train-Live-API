// File name    : consists.service.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : consists service
import consist from "../data/models/consist.js";
import { log } from "../utils/logger.js";

export async function listConsists(line) {

  if (line == 1 || ( 3 <=line && line <= 6)) {
    try {
      const data = await consist.find({ line: line });
      data.sort(
        (a, b) => Number(a.trip_short_name) - Number(b.trip_short_name)
      );
      return data;
    } catch (err) {
      log.error("Faild to find consists :", err);
      throw err;
    }
  } else {
    const error = new Error(`Line ${line} doesn't existe.`);
    error.status = 400; 
    return error;
  }
}
