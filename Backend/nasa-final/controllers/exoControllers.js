const Planet = require('../models/exoModels');

// Function to get all planets
async function getAllPlanets() {
  try {
    const planets = await Planet.find(); // Fetch all documents from the 'nasa' collection
    console.log(planets);
  } catch (error) {
    console.error('Error fetching planets:', error);
  }
}

getAllPlanets();
