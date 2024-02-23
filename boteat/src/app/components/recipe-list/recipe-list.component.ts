import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../../interfaces/i-recipe';
import { RecipesService } from '../../services/recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[] = [];
  private subscription: Subscription = new Subscription(); // Déclarez une variable pour stocker l'abonnement

  constructor(private recipesService: RecipesService) {}

  public ngOnInit(): void {
    this.subscription = this.recipesService.getAllRecipes().subscribe({
      next: (data: Recipe[]) => {
        this.recipes = data;
      },
      error: (error) => {
        console.error("Une erreur s'est produite lors de la récupération des recettes :", error);
      }
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
