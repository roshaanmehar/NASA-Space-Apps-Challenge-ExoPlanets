// /backend/controllers/controller.js
const Planet = require("../models/models");

const fetchAllPlanets = async (req, res) => {
  try {
    const planets = await Planet.find();
    console.log(planets);
    res.json(planets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching planets", error: error.message });
  }
};

//fetch a single planet by id
const fetchSinglePlanet = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) {
      return res
        .status(404)
        .json({ message: "No Plant exists with the given ID" });
    }
    res.json(planet);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

//fetch all habitable planets
const fetchAllHabitablePlanets = async (req, res) => {
  try {
    const habitablePlanets = await Planet.find({ habitable: true });
    if (!habitablePlanets) {
      return res.status(404).json({ message: "No habitable Planets found" });
    }
    res.json(habitablePlanets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

//fetch all uninhabitable planets
const fetchAllUninhabitablePlanets = async (req, res) => {
  try {
    const uninhabitablePlanets = await Planet.find({ habitable: false });
    if(!uninhabitablePlanets){
      return res.status(404).json({message:"No Uninhabitable Planets Found"})
    }
    res.json(uninhabitablePlanets)
  } catch (error) {
    res.status(500).json({message:"Error while fetching the data", error:error.message})
  }
};
module.exports = {
  fetchAllPlanets,
  fetchSinglePlanet,
  fetchAllHabitablePlanets,
  fetchAllUninhabitablePlanets
};
