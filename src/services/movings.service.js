// File name    : stations.service.js
// Created by   : Ludovic Fournier
// Created date : 22-09-2025
// Description  : stations service

import { getLiveData } from "../data/live-data.js";
import { trips } from "../data/trips.js";
import { TRAIN_COACH } from "../data/train.coach.js";
import { TRAIN_ENGINE } from "../data/train.engine.js";

export function listMovingsTrains(trainInfo) {
  let data = getLiveData();
  if (data.entity === null) {
    return [];
  }

  let livetrains = [];

  for (const entity of data.data.entity) {
    let train = {};
    let position = {};

    trips.forEach((trip) => {
      if (trip.trip_id == entity.vehicle.trip.tripId) {
        train.trip_short_name = trip.trip_short_name;
        train.trip_headsign = trip.trip_headsign;
      }
    });

    if (entity.vehicle.currentStatus == 1) {
      train.status = "stopped";
    } else {
      train.status = "incoming";
    }

    position.latitude = entity.vehicle.position.latitude;
    position.longitude = entity.vehicle.position.longitude;
    train.position = position;
    train.line = entity.vehicle.trip.routeId;
    train.stationId = entity.vehicle.stopId;

    if (trainInfo) {
      let traindetail = {};

      traindetail.speed = entity.vehicle.position.speed;
      traindetail.occupancyStatus = entity.vehicle.occupancyStatus;
      traindetail.consists = structuredClone(
        entity.vehicle.multiCarriageDetails
      );
      traindetail.consists.forEach((wagon) => {
        TRAIN_COACH.forEach((coach) => {
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
      train.train_details = traindetail;
    }

    livetrains.push(train);
  }

  return livetrains;
}
