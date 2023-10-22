import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public projects: Array<any> = [
    {
      title : 'Encarar',
      description: 'Play with your friends',
      url: 'https://encarar-6cf78.web.app/',
      image: './assets/projects/field.jpeg',
      tecnologies:[
        './assets/images/ionic.webp',
        './assets/images/js.png',
        './assets/images/nodejs.png',
        './assets/images/mongo.jpg',
        './assets/images/firebase.webp',
      ],
      progress: false,
    },
    {
      title : 'Trivia Game',
      description: 'Do you know all capitals of the world?',
      url: 'https://tavo20.github.io/trivia-countries-vue-ssr/',
      image: './assets/projects/control.jpg',
      tecnologies:[
        './assets/images/vue.png',
        './assets/images/js.png',
      ],
      progress: false,

    },
    {
      title : 'Sports',
      description: 'Check the match schedules of the biggest leagues in the world',
      url: 'https://la-liga-8f56c.web.app/#/home',
      image: './assets/projects/soccer.jpg',
      tecnologies:[
        './assets/images/vue.png',
        './assets/images/js.png',
        './assets/images/nodejs.png',
        './assets/images/mongo.jpg',

      ],
      progress: true,

    },
    {
      title : 'Ecommerce',
      description: 'Buy your favorite products',
      url: 'https://tavo20.github.io/store-angular-challenge/products/products-all',
      image: './assets/projects/ecommerce.jpg',
      tecnologies:[
        './assets/images/angular.png',
        './assets/images/js.png',
        './assets/images/nodejs.png',
        './assets/images/mongo.jpg',
      ],
      progress: false,
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
