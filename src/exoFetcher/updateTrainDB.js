// File name    : updateTrainDB.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : Update Train DB

import Consist from "../data/models/consist.js";
import { trips } from "../data/trips.js";
import { TRAIN_COACH } from "../data/train.coach.js";
import { TRAIN_ENGINE } from "../data/train.engine.js";
import { nowInMontreal } from "../utils/date.js";

export async function updateDB(consist) {
  let trip_short_name;
  let trip_headsign;
  let line = consist.vehicle.trip.routeId;
  let train_composition = [];

  trips.forEach((trip) => {
    if (trip.trip_id == consist.vehicle.trip.tripId) {
      trip_short_name = trip.trip_short_name;
      trip_headsign = trip.trip_headsign;
    }
  });

  consist.vehicle.multiCarriageDetails.forEach((wagon) => {
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

    train_composition.push({
      id: wagon.id,
      carriageSequence: wagon.carriageSequence,
      model_id: wagon.model_id,
    });
  });

  const now = new Date();

  //Retrieve the last consists with the same trip_short_name and the most recent
  const last = await Consist.findOne({
    trip_short_name: trip_short_name,
  }).sort({ date: -1 });

  //If it exist
  if (last) {
    //Was he created in more then 12 hour ago
    if ((now - last.date) / (1000 * 60 * 60) > 12) {
      //If yes create a new one
      await Consist.create({
        trip_short_name: trip_short_name,
        trip_headsign: trip_headsign,
        date: nowInMontreal(),
        line: line,
        composition: train_composition,
      });
    }
  } else {
    // If it dosen't existe create it
    await Consist.create({
      trip_short_name: trip_short_name,
      trip_headsign: trip_headsign,
      date: nowInMontreal(),
      line: line,
      composition: train_composition,
    });
  }
}
