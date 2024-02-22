const express = require('express');
const mealPlanRoutes = require('./routes/mealPlanRoutes');
const recipeRoutes = require('./routes/recipeRoutes'); 
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware pour autoriser les requêtes CORS
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());



// Routes pour les plans de repas
app.use('/api/meal-plans', mealPlanRoutes);

// Utilisez le routeur de recettes pour gérer les routes des recettes
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connexion à MongoDB
const dbURI = 'mongodb://localhost:27017/boteatBDD';

(async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Connexion à MongoDB réussie !');

        // Gestion de la fermeture de la connexion
        process.on('SIGINT', async () => {
            try {
                await mongoose.connection.close();
                console.log('Déconnexion de MongoDB réussie !');
                process.exit(0);
            } catch (error) {
                console.error('Erreur lors de la déconnexion de MongoDB :', error);
                process.exit(1);
            }
        });
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
    }
})();
