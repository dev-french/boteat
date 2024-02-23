import { Component } from '@angular/core';
import { Recipe } from 'src/app/interfaces/i-recipe';
import { RecipesService } from 'src/app/services/recipes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public recipe: Recipe = {
    name: '',
    ingredients: [],
    instructions: '',
    cook_time: '',
    difficulty: '',
    dish_type: '',
    food_category: '',
    dietary_detail: '',
    origin_region: ''
  };

  public ingredientString: string = ''; // Variable pour stocker la liste d'ingrédients sous forme de chaîne

  constructor(private recipesService: RecipesService) {} // Injectez votre service de recettes ici

  public addRecipe() {
    // Convertir la chaîne d'ingrédients en un tableau
    this.recipe.ingredients = this.ingredientString.split(',').map(ingredient => ingredient.trim());

    // Appelez la méthode d'ajout de recette de votre service de recettes
    this.recipesService.addRecipe(this.recipe).subscribe(
      () => {
        // Réinitialiser le formulaire après l'ajout réussi
        this.recipe = {
          name: '',
          ingredients: [],
          instructions: '',
          cook_time: '',
          difficulty: '',
          dish_type: '',
          food_category: '',
          dietary_detail: '',
          origin_region: ''
        };
        this.ingredientString = '';
        // Afficher un message de succès ou rediriger l'utilisateur si nécessaire
      },
      error => {
        console.error('Erreur lors de l\'ajout de la recette : ', error);
        // Afficher un message d'erreur à l'utilisateur si nécessaire
      }
    );
  }
}
