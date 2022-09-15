import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public projects: Array<any> = [
    {
      title : 'Trivia Game',
      description: 'Do you know all capitals of the world?',
      url: 'https://tavo20.github.io/trivia-countries-vue-ssr/',
      image: '../../../../assets/projects/control.jpg',
    },
    {
      title : 'Sports',
      description: 'Check the match schedules of the biggest leagues in the world',
      url: 'https://tavo20.github.io/trivia-countries-vue-ssr/',
      image: '../../../../assets/projects/soccer.jpg',

    },
    {
      title : 'Ecommerce',
      description: 'Buy your favorite products',
      url: 'https://tavo20.github.io/store-angular-challenge/products/products-all',
      image: '../../../../assets/projects/ecommerce.jpg',
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
