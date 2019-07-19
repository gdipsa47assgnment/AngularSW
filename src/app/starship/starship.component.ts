import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Starship } from 'angular2-swapi';

@Component({
  selector: 'app-Starship',
  template: `
    <li *ngFor="let starship of starship$ | async">
      <h1>{{ starship.name }}</h1>
    </li>
  `,
  styles: []
})
export class StarshipComponent implements OnInit {

  starship$: Observable<Starship[]>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit() {
    // Get list of films you can specify page
   this.starship$ = this._swapi.getStarships();
  }

}