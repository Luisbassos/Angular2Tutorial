import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../objetos/hero';

import { HeroService } from '../servicios/hero.service';
@Component({
  selector: 'my-hero-detail',
templateUrl: 'app/componentes/hero-detail.component.html',
  styleUrls: ['app/componentes/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute) {
}
ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  });
}
goBack(): void {
  window.history.back();
}
  @Input()
  hero: Hero;
}
