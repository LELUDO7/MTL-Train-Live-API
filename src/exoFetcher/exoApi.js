// File name    : exoApi.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : All exo API related stuff

import axios from "axios";
import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import fs from "fs";

async function fetchExoData() {
  try {
    const response = await axios.get(
        `https://exo.chrono-saeiv.com/api/opendata/v1/TRAINS/vehicleposition`, 
        {
          headers: {
            "Ocp-Apim-Subscription-Key": `${process.env.EXO_API_KEY}`, 
            "Cache-Control": "no-cache"
          },
          responseType: "arraybuffer",
          timeout: 15000,
        }
     );

      const buffer = response.data;

      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
        new Uint8Array(buffer)
      );

    const logEntry = {
      timestamp: new Date().toISOString(),
      data: feed,
    };

  
    fs.writeFileSync(
      "./data/exo_data.json",
      JSON.stringify(logEntry, null, 2) + ",\n"
    );

    console.log("✅ Exo data save at", new Date().toLocaleTimeString());
  } catch (error) {
    console.error("❌ Error retrieving Exo data :", error.message);
  }
}

export function startExoFetcher() {
  
  fetchExoData();

  setInterval(fetchExoData, 60 * 1000);
}