import { Component } from '@angular/core';
import { Recipes, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recipes: Recipes[];

  constructor(private recipeService: RecipeService) {
    this.recipeService;
  }

  ngOnInit() {
    this.recipes = this.recipeService.getAll();
  }

}
