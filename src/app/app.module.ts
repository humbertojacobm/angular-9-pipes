import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroBirthdayComponent } from './hero-birthday1/hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2/hero-birthday2.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';
import { FlyingHeroesImpureComponent } from './flying-heroes-impure/flying-heroes-impure.component';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { FetchJsonPipe } from './fetch-json.pipe';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
