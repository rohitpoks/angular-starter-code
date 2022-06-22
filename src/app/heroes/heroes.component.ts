import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {

  // creates an object of interface Hero
  selectedHero? : Hero;
  heroes: Hero[] = HEROES;

  constructor() {}

  // constructor is called, usually intialization goes into ngOnInit

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // the reason you want to initialize variables here is because you have the guarantee that the component has finished loading
}
