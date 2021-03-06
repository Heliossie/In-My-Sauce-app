import { Component } from '@angular/core';

export interface Page {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectIndex = 0;
  public appPages: Page[] = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Recettes',
      url: '/recipe',
      icon: 'book-outline'
    }
  ]
  constructor() { }
}
