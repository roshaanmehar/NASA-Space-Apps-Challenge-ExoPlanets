const express = require("express");
const router = express.Router();

const {
  fetchAllPlanets,
  fetchSinglePlanet,
  fetchAllHabitablePlanets,
  fetchAllUninhabitablePlanets,
} = require("../controllers/controller");

// Define the route
router.get("/fetch", fetchAllPlanets);
router.get("/single/:id", fetchSinglePlanet);
router.get("/habitable", fetchAllHabitablePlanets);
router.get("/uninhabitable", fetchAllUninhabitablePlanets);

// Proper export of the router
module.exports = router; // Ensure this line is module.exports, not modules.export
