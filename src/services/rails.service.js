// File name    : stations.service.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : stations service

import { getLiveData } from "../data/live-data.js";
import { rails } from "../data/train.rails.data.js";
import { stations } from "../data/train.stations.data.js";
import { trips } from "../data/trips.js";

export function listRails() {
  let data = getLiveData();

  for (let index = 0; index < rails.length; index++) {
    rails[index].status = "notpresent";
  }

  for (let index = 0; index < rails.length; index++) {
    for (const trains of data.data.entity) {
      //Train not stopped at station
      if (trains.vehicle.currentStatus != 1) {
        if (trains.vehicle.stopId == rails[index].id.substring(2)) {
          for (let i = 0; i < trips.length; i++) {
            if (
              trips[i].trip_id == trains.vehicle.trip.tripId &&
              trips[i].direction_id == 0
            ) {
              rails[index].status = "present";
            }
          }
        } else {
          for (let i = 0; i < stations.length; i++) {
            if (
              stations[i].id == trains.vehicle.stopId &&
              stations[i].parent_id == rails[index].id.substring(2)
            ) {
              for (let i = 0; i < trips.length; i++) {
                if (
                  trips[i].trip_id == trains.vehicle.trip.tripId &&
                  trips[i].direction_id == 1
                ) {
                  rails[index].status = "present";
                }
              }
            }
          }
        }
      }
    }
  }

  return rails;
}
