import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-Films',
  template: `
    <li *ngFor="let film of film$ | async">
      <h1>{{ film.title }}</h1>
    </li>
  `,
  styles: []
})
export class FilmComponent implements OnInit {

  film$: Observable<Film[]>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit() {
    // Get list of films you can specify page
   this.film$ = this._swapi.getFilms();
  }

}