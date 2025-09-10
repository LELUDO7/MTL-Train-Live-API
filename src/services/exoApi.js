// File name    : exoApi.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : All exo API related stuff

const axios = require("axios");


async function getTrainsPositions() {
  try {
    const response = await axios.get(
      `https://api.exo.example.com/v1/departures/${stationId}`, 
      {
        headers: {
          "Ocp-Apim-Subscription-Key": `Bearer ${process.env.EXO_API_KEY}`, 
          "Cache-Control": "no-cache"
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur API exo:", error.message);
    throw error;
  }
}

module.exports = { getTrainsPositions };