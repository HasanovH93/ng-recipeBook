import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is simply a Test', 'https://www.foodandwine.com/thmb/vVUv6lRmIZg9HgxnmemlK8ouD3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Butternut-Squash-with-chorizo-spiced-kale-FT-RECIPE0920-abdbe96ef511468d96b0cccca512ccaa.jpg'),
    new Recipe('Another Test Recipe','This is simply a Test', 'https://www.foodandwine.com/thmb/vVUv6lRmIZg9HgxnmemlK8ouD3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted-Butternut-Squash-with-chorizo-spiced-kale-FT-RECIPE0920-abdbe96ef511468d96b0cccca512ccaa.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}
