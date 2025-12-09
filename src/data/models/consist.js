// File name    : consist.js
// Created by   : Ludovic Fournier
// Created date : 08-12-2025
// Description  : Consist model

import mongoose from "mongoose";

const compositionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    carriageSequence: { type: Number, required: true },
    model_id: { type: Number, required: true },
  },
  { _id: false, versionKey: false }
);

const consistSchema = new mongoose.Schema(
  {
    trip_short_name: { type: String, required: true },
    trip_headsign: { type: String, required: true },
    line: { type: Number, required: true },
    composition: [compositionSchema],
  },
  { versionKey: false }
);

const Consist = mongoose.model("Consist", consistSchema);
export default Consist;
