import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location }                 from '@angular/common';

@Component({
  selector: 'my-album',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
  goAlbum(): void {
    this.location.back();
  }
  // ngOnInit(): void {
  //   this.heroService.getHeroes()
  //     .then(heroes => this.heroes = heroes.slice(1, 5));
  // }
}
