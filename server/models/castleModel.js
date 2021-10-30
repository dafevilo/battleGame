import mongoose from "mongoose";

const troopSchema = mongoose.Schema({
  spearsmen: Number,
  swordsmen: Number,
  archers: Number,
});

const castleSchema = mongoose.Schema({
  user: String,
  kingdom: String,
  age: Number,
  troops: [troopSchema],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Castle = mongoose.model("Castle", castleSchema);

export default Castle;
