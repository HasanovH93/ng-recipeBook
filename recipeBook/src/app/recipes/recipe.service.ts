import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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
  addIngredientsToShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients)
  }
}

