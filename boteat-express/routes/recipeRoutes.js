const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route pour afficher toutes les recettes
router.get('/list', recipeController.getAllRecipes);

// Route pour afficher une recette spécifique
router.get('/:id', recipeController.getRecipeById);

// Route pour créer une nouvelle recette
router.post('/add', recipeController.createRecipe);

module.exports = router;
