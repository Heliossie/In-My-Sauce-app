import { Component, OnInit } from '@angular/core';
import { Recipes, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes: Recipes[];

  constructor(private recipeService: RecipeService) {
    this.recipeService;
  }

  // Méthode d'initialisation éxécuter a chaque ouverture de la page
  ngOnInit() {
    this.recipes = this.recipeService.getAll();
  }

}
