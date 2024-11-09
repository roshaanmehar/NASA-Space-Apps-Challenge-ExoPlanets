const mongoose = require('mongoose');

// Define the schema for an exoplanet
const PlanetSchema = new mongoose.Schema({
  name: { type: String, required: true },            // Name of the planet
  distance: { type: Number, required: true },         // Distance from Earth in light-years
  density: { type: Number, required: true },          // Density of the planet
  temp: { type: Number, required: true },             // Surface temperature in Kelvin
  mass: { type: Number, required: true },             // Mass relative to Earth's mass
  radius: { type: Number, required: true },           // Radius relative to Earth's radius
  flux: { type: Number, required: true },             // Amount of energy received from the host star
  period: { type: Number, required: true },           // Orbital period in days
  eccentricity: { type: Number, required: true },     // Orbital eccentricity
  gravity: { type: Number, required: true },          // Surface gravity in m/s²
  esi: { type: Number, required: true },              // Earth Similarity Index
  habitability_score: { type: Number, required: true },// Custom habitability score
  habitable: { type: Boolean, required: true },       // Whether the planet is habitable or not
  surface_type: { type: String, required: true }      // Surface type (e.g., Rocky)
});

// Target the specific collection 'nasa' inside the 'nasa' database
const Planet = mongoose.model('Planet', PlanetSchema, 'nasa');

module.exports = Planet;
