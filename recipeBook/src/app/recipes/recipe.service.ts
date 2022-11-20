import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is simply a Test',
      'https://www.foodandwine.com/thmb/vVUv6lRmIZg9HgxnmemlK8ouD3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Butternut-Squash-with-chorizo-spiced-kale-FT-RECIPE0920-abdbe96ef511468d96b0cccca512ccaa.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries',2)
      ]
    ),
    new Recipe(
      'Burger',
      'This is simply a Test',
      'https://www.foodandwine.com/thmb/vVUv6lRmIZg9HgxnmemlK8ouD3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Butternut-Squash-with-chorizo-spiced-kale-FT-RECIPE0920-abdbe96ef511468d96b0cccca512ccaa.jpg',
      [
        new Ingredient('Onions', 1),
        new Ingredient('Paper',4)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number){
    return this.recipes.slice()[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index:number, newRecipe:Recipe){
  this.recipes[index] = newRecipe
  this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number){
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice())
  }
}

