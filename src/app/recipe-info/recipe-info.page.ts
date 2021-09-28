import { Component, OnInit } from '@angular/core';
import { Recipes, RecipeService } from '../recipe.service';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

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

  /**
   * Méthode d'initialisation éxécutée à chaque ouverture de cette pages
   */
  ngOnInit() {
    this.recipe = this.recipeService.getCurrent();
  }


  /**
   * function pour début le timer des recette
   * cette fonction est appeler dans le recipe-info.html
   */
  startTimer() {
    // Récupération du time dans l'objet recette et multiplication de celui-ci par 60 pour obtenir le nombre de minutes en secondes.
    this.counter = this.recipe.time * 60;
    this.interval = setInterval(() => {
      if (this.counter > 0) {
        // si le compteur et supérieur a zéro, retirer 1
        this.counter--;
      } else {
        // si le compter tombe a zéro appel de la fonction finishTimer()
        this.finishTimer();

      }
      // 1000 réprésente le temps entre chaque éxécution de la fonction, ici 1 seconde
    }, 1000)
  }
  /**
   * fonction de fin de timer
   */
  finishTimer() {
    // clearInterval permet de remettre le compteur au temps définit
    clearInterval(this.interval);
    // this.vib() appel la fonction vib() pour émettre une vibration al a fin du compteur
    this.vib();
  }

  /**
   * fonction vib pour permettre au téléphone de vibrer quand le timer est a zéro
   */
  async vib() {
    // Haptics est un plugin capacitor permettant dans le cas de mon usage de faire vibrer le téléphone
    await Haptics.impact({ style: ImpactStyle.Medium });
    await Haptics.vibrate()
  }
}