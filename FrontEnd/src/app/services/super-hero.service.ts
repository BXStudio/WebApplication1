import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeroes(): SuperHero[] {
    let hero1 = new SuperHero(1, "Mister K", "Answering 'Okayy' to every question.", "London");
    let hero2 = new SuperHero(1, "Mister E", "Eating Food without opening the mouth.", "Liverpool");

    return [hero1, hero2];
  }
}
