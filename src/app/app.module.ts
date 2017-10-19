import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './components/hero/hero-service/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/hero/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero/hero-detail/hero-detail.component';
import { HeroService }          from './components/hero/hero-service/hero.service';
import { HeroSearchComponent }  from './components/hero/hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
