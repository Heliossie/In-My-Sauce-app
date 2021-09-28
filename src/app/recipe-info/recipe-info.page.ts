import { Component, OnInit } from '@angular/core';
import { Recipes, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.page.html',
  styleUrls: ['./recipe-info.page.scss'],
})
export class RecipeInfoPage implements OnInit {

  private recipe: Recipes;
  private counter: number;
  private interval;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipe = this.recipeService.getCurrent();
  }


  startTimer(recipes: Recipes) {
    this.interval = setInterval(() => {
      this.counter = this.recipe.time * 60;
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.finishTimer();

      }
    }, 1000)
  }

  finishTimer() {
    clearInterval(this.interval);
    // Mettre bip bip ici ;)
  }
}