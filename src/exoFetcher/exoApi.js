// File name    : exoApi.js
// Created by   : Ludovic Fournier
// Created date : 09-09-2025
// Description  : All exo API related stuff

import axios from "axios";
import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import { updateLiveData } from "../data/live-data.js";
import { log } from "../utils/logger.js";

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

      let index = 0;
      feed.entity.forEach(train => {
        feed.entity[index].vehicle.stopId = train.vehicle.stopId.slice(0,-1) + "-" +  train.vehicle.trip.routeId;
        index++;
      });

    updateLiveData({ data: feed, updatedAt: new Date().toISOString() })

    log.info("Exo data save at", new Date().toLocaleTimeString());
  } catch (error) {
    log.error("Error retrieving Exo data :", error.message);
  }
}

export function startExoFetcher() {
  
  fetchExoData();
  setInterval(fetchExoData, 30 * 1000);
}