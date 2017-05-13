import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {

  private categories: any[] = [
    {
      img: 'assets/img/categories/museum.jpg',
      title: 'Museums',
      desc: 'Чтобы почувствовать и пережить что-то важное для себя, стать ближе к художественным произведениям, почувствовать собственную причастность к ним.'
    },
    {
      img: 'assets/img/categories/museum.jpg',
      title: 'Museums',
      desc: 'Чтобы почувствовать и пережить что-то важное для себя, стать ближе к художественным произведениям, почувствовать собственную причастность к ним.'
    },
    {
      img: 'assets/img/categories/museum.jpg',
      title: 'Museums',
      desc: 'Чтобы почувствовать и пережить что-то важное для себя, стать ближе к художественным произведениям, почувствовать собственную причастность к ним.'
    },
    {
      img: 'assets/img/categories/museum.jpg',
      title: 'Museums',
      desc: 'Чтобы почувствовать и пережить что-то важное для себя, стать ближе к художественным произведениям, почувствовать собственную причастность к ним.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
