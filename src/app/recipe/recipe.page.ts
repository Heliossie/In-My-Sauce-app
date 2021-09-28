import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipes, RecipeService } from '../recipe.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes: Recipes[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipeService;
  }

  // Méthode d'initialisation éxécuter a chaque ouverture de la page
  ngOnInit() {
    this.recipes = this.recipeService.getAll();
  }
  showRecipe(recipes: Recipes) {
    this.recipeService.setCurrent(recipes);
    this.router.navigateByUrl('recipe-info');
  }

  async share(recipes: Recipes) {
    await Share.share({
      title: `Partager cette recette : ${recipes.title}`,
      text: 'Voici une recette qui pourrais te plaire',
      url: 'http://ionicframework.com/',
    });
  }
}
