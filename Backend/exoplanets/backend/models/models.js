const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  distance: { type: Number, required: true },
  density: { type: Number, required: true },
  temp: { type: Number, required: true },
  mass: { type: Number, required: true },
  radius: { type: Number, required: true },
  flux: { type: Number, required: true },
  period: { type: Number, required: true },
  eccentricity: { type: Number, required: true },
  gravity: { type: Number, required: true },
  esi: { type: Number, required: true },
  habitability_score: { type: Number, required: true },
  habitable: { type: Boolean, required: true },
  surface_type: { type: String, required: true },
});
const Planet = mongoose.model("Planet", PlanetSchema, "nasa");
module.exports = Planet;
