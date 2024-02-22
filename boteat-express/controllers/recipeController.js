const Recipe = require('../models/Recipe');

const recipeController = {
    getAllRecipes: async (req, res) => {
        try {
            // Récupérer toutes les recettes de la base de données
            const recipes = await Recipe.find();
            
            // Envoyer la liste des recettes en réponse
            res.status(200).json(recipes);
        } catch (error) {
            // En cas d'erreur, renvoyer un message d'erreur avec un statut 500
            console.error(error);
            res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des recettes." });
        }
    },

    getRecipeById: async (req, res) => {
        // Logique pour récupérer une recette par son identifiant
    },

    createRecipe: async (req, res) => {
        // Logique pour créer une nouvelle recette
    }
};

module.exports = recipeController;
