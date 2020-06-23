import { Component, OnInit } from '@angular/core';
import { FlyingHeroesComponent } from '../flying-heroes/flying-heroes.component';
import { Flyer } from '../heroes.model';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styleUrls: ['./flying-heroes-impure.component.css']
})
export class FlyingHeroesImpureComponent implements OnInit {

  public heroes: Flyer[] = [];
  private canFly = true;
  constructor() {this.reset(); }

  ngOnInit() {
  }

  addHero(name: string){
    name = name.trim();
    if (!name){return;}
    // let hero = {name, canFly: this.canFly};
    var hero = new Flyer();
    hero.name= name;
    hero.canFly=this.canFly;
    this.heroes.push(hero);
  }

  reset(){
    this.heroes = this.heroes.slice();
  }

}
