import Train from "../data/models/train.js";
import { trips } from "../data/trips.js";
import { TRAIN_COACH } from "../data/train.coach.js";
import { TRAIN_ENGINE } from "../data/train.engine.js";

export async function updateDB(train) {
  let trip_short_name;
  let trip_headsign;
  let line = train.vehicle.trip.routeId;
  let train_composition = [];

  trips.forEach((trip) => {
    if (trip.trip_id == train.vehicle.trip.tripId) {
      trip_short_name = trip.trip_short_name;
      trip_headsign = trip.trip_headsign;
    }
  });

  train.vehicle.multiCarriageDetails.forEach((wagon) => {
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

  await Train.findOneAndUpdate(
    { trip_short_name: trip_short_name },
    {
      $set: {
        trip_short_name: trip_short_name,
        trip_headsign: trip_headsign,
        line: line,
        composition: train_composition
      },
    },
    {
      upsert: true,
    }
  );
}
