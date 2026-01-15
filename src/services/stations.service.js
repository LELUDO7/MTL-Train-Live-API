// File name    : stations.service.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : stations service

import { getLiveData } from "../data/live-data.js";
import { stations } from "../data/train.stations.data.js";
import { trips } from "../data/trips.js";
import { TRAIN_COACH } from "../data/train.coach.js"
import { TRAIN_ENGINE } from "../data/train.engine.js"

export function listStations(trainInfo) {
  let data = getLiveData();
  console.log(data);
  if (data.entity === null) {
    return [];
  }
  let liveStations = structuredClone(stations);

  for (let index = 0; index < liveStations.length; index++) {
    if (trainInfo) {
      liveStations[index].trains_list = [];
    }

    for (const trains of data.data.entity) {
      if (trains.vehicle.stopId == liveStations[index].id) {
        if (trains.vehicle.currentStatus == 1) {
          liveStations[index].status = "stopped";
        } else {
          liveStations[index].status = "incoming";
        }

        if (trainInfo) {
          let traindetail = {};
          trips.forEach((trip) => {
            if (trip.trip_id == trains.vehicle.trip.tripId) {
              traindetail.trip_short_name = trip.trip_short_name;
              traindetail.trip_headsign = trip.trip_headsign;
              if (trains.vehicle.currentStatus == 1) {
                traindetail.status = "stopped";
              } else {
                traindetail.status = "incoming";
              }
            }
          });
          traindetail.occupancyStatus = trains.vehicle.occupancyStatus;
          traindetail.train = structuredClone(trains.vehicle.multiCarriageDetails);
          traindetail.train.forEach((wagon) => {
            TRAIN_COACH.forEach(coach => {
              wagon.id = wagon.id.replace(/^exo/, "");
              if (coach.id <= wagon.id && wagon.id <= coach.number_end) {
                wagon.model_id = coach.id;
              }
            });
            TRAIN_ENGINE.forEach((coach) => {
              wagon.id = wagon.id.replace(/^exo/, "");
              if (coach.id <= wagon.id && wagon.id <= coach.number_end) {
                wagon.model_id = coach.id;
              }
            });
          });
          liveStations[index].trains_list.push(traindetail);
        }
      }
    }
  }

  return liveStations;
}
