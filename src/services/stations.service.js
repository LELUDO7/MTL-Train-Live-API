// File name    : stations.service.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : stations service

import { getLiveData } from "../data/live-data.js";
import { stations } from "../data/train.data.js";

export function listStations() {

  let data = getLiveData()

  for (let index = 0; index < stations.length; index++) {
    stations[index].status = "offline"
    
  }

  for (let index = 0; index < stations.length; index++) {
   
    for (const trains of data.data.entity) {
      if (trains.vehicle.stopId == stations[index].id ) {

        if (trains.vehicle.currentStatus == 1) {
          stations[index].status = "stopped";
        } else {
          stations[index].status = "incoming";
        }
      } 
    }
  }

  return stations;
}