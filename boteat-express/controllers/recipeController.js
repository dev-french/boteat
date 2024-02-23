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
        try {
            const newRecipe = new Recipe(req.body); // Créez une nouvelle instance de recette en utilisant les données de la requête
            const savedRecipe = await newRecipe.save(); // Enregistrez la nouvelle recette dans la base de données
            res.status(201).json(savedRecipe); // Répondez avec la recette nouvellement créée
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Une erreur s'est produite lors de la création de la recette." });
        }
    }
};

module.exports = recipeController;
