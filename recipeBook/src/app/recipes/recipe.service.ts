import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

 private recipes: Recipe[] = [
    new Recipe('Test Recipe','This is simply a Test', 'https://www.foodandwine.com/thmb/vVUv6lRmIZg9HgxnmemlK8ouD3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Butternut-Squash-with-chorizo-spiced-kale-FT-RECIPE0920-abdbe96ef511468d96b0cccca512ccaa.jpg'),
    new Recipe('Another Test Recipe','This is simply a Test', 'https://www.foodandwine.com/thmb/vVUv6lRmIZg9HgxnmemlK8ouD3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Butternut-Squash-with-chorizo-spiced-kale-FT-RECIPE0920-abdbe96ef511468d96b0cccca512ccaa.jpg')
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice()
  }
}
