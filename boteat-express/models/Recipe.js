const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions: String,
    cook_time: String,
    difficulty: String,
    dish_type: String,
    food_category: String,
    dietary_detail: String,
    origin_region: String
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;