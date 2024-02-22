import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/i-recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  // TODO modifier ceci pour être corda avec la prod
  private apiUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) { }

  public getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/list`);
  }
}
