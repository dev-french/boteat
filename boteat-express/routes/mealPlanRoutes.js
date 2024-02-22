const express = require('express');
const router = express.Router();
const mealPlanController = require('../controllers/mealPlanController');

// Route pour créer un nouveau plan de repas
router.post('/', mealPlanController.createMealPlan);

module.exports = router;