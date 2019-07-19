import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2SwapiModule } from 'angular2-swapi';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { PeopleComponent } from './people/people.component';
import { StarshipComponent } from './starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    PeopleComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    Angular2SwapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
