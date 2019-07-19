import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, People } from 'angular2-swapi';

@Component({
  selector: 'app-People',
  template: `
    <li *ngFor="let people of people$ | async">
      <h1>{{ people.name }}</h1>
    </li>
  `,
  styles: []
})
export class PeopleComponent implements OnInit {

  people$: Observable<People[]>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit() {
    // Get list of films you can specify page
   this.people$ = this._swapi.getPeople();
  }

}