import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'All Might' },
      { id: 12, name: 'Endeavor' },
      { id: 13, name: 'Hawks' },
      { id: 14, name: 'Best Jeanist' },
      { id: 15, name: 'Crimson Riot' },
      { id: 16, name: 'Edgeshot' },
      { id: 17, name: 'Eraserhead' },
      { id: 18, name: 'Midnight' },
      { id: 19, name: 'Ryukyu' },
      { id: 20, name: 'Nighteye' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}