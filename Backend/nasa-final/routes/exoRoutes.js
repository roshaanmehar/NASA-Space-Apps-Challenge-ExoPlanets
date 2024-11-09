const express = require('express');
const router = express.Router(); // Initialize router
const Planet = require('../models/exoModels');

// Fetch all planets
router.get('/planets', async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planets', error: error.message });
  }
});

// Fetch a single planet by ID
router.get('/planets/:id', async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) return res.status(404).json({ message: 'Planet not found' });
    res.json(planet);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching planet', error: error.message });
  }
});

// Fetch habitable planets
router.get('/planets/habitable', async (req, res) => {
  try {
    const habitablePlanets = await Planet.find({ habitable: true });
    res.json(habitablePlanets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching habitable planets', error: error.message });
  }
});

// Add a new planet
router.post('/planets', async (req, res) => {
  try {
    const newPlanet = new Planet(req.body);
    const savedPlanet = await newPlanet.save();
    res.status(201).json(savedPlanet);
  } catch (error) {
    res.status(400).json({ message: 'Error saving planet', error: error.message });
  }
});

module.exports = router; // Don't forget to export the router
