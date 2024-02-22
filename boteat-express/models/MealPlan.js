const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
    // Définissez les champs de votre modèle de plan de repas
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;
