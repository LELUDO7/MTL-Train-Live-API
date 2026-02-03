// File name    : consists.service.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : consists service
import consist from "../data/models/consist.js";

export async function listConsists(line, dateStr) {
  if (dateStr === undefined) {
    const error = new Error();
    error.status = 400;
    error.detail = `This date is not valid : ${dateStr}`;
    return error;
  }

  if (line == 1 || (3 <= line && line <= 6)) {
    try {
      const { start, end } = dayRangeUTC(dateStr);

      const data = await consist.find({
        line,
        date: {
          $gte: start,
          $lt: end,
        },
      });

      data.sort(
        (a, b) => Number(a.trip_short_name) - Number(b.trip_short_name)
      );

      return data;
    } catch (err) {
      return err;
    }
  } else {
    const error = new Error();
    error.status = 400;
    error.detail = `Line ${line} doesn't existe.`;
    return error;
  }
}

function dayRangeUTC(dateStr) {

  const [y, m, d] = dateStr.split("-").map(Number);

  if (!y || !m || !d || dateStr.length > 10 || dateStr.length < 10) {
    const error = new Error();
    error.status = 400;
    error.detail = `This date is not valid : ${dateStr}`;
    throw error;
  }

  const start = new Date(Date.UTC(y, m - 1, d));
  const end = new Date(Date.UTC(y, m - 1, d + 1));

  return { start, end };
}
