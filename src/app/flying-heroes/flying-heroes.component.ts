import { Component, OnInit } from '@angular/core';
import { Flyer } from '../heroes.model';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
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
    this.heroes = [...this.heroes];
  }

  reset(){
    this.heroes = this.heroes.slice();
  }

}
