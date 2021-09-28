import { Component } from '@angular/core';
import { Recipes, RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recipes: Recipes[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipeService;
  }
  // Méthode d'initialisation éxécuter a chaque ouverture de la page
  ngOnInit() {
    this.recipes = this.recipeService.getAll();
  }

  /**
   * Function permettant de de voir les recettes
   * @param recipes
   */
  showRecipe(recipes: Recipes) {
    this.recipeService.setCurrent(recipes);
    this.router.navigateByUrl('recipe-info');
  }
}
