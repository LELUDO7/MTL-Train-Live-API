// File name    : stations.service.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : stations service

import { getLiveData } from "../data/live-data.js";
import { stations } from "../data/train.stations.data.js";

export function listStations(trainInfo) {
  let data = getLiveData();

  let liveStations = structuredClone(stations);

  for (let index = 0; index < liveStations.length; index++) {

    for (const trains of data.data.entity) {

      if (trains.vehicle.stopId == liveStations[index].id) {
        
        if (trains.vehicle.currentStatus == 1) {
          liveStations[index].status = "stopped";
        } else {
          liveStations[index].status = "incoming";
        }

        if (trainInfo) {
          liveStations[index].occupancyStatus = trains.vehicle.occupancyStatus;
          liveStations[index].train = trains.vehicle.multiCarriageDetails;
          
        }

      }
    }
  }

  return liveStations;
}
