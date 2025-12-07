import mongoose from "mongoose";

const compositionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    carriageSequence: { type: Number, required: true },
    model_id: { type: Number, required: true },
  },
  { _id: false }
);

const trainSchema = new mongoose.Schema({
  trip_short_name: { type: String, required: true },
  trip_headsign: { type: String, required: true },
  line: { type: Number, required: true },
  composition: [compositionSchema],
});

const Train = mongoose.model("Train", trainSchema);
export default Train;
