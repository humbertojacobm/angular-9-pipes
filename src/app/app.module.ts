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

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
