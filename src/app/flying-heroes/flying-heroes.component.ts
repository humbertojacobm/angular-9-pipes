import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
  public heroes: any[] = [];
  private canFly = true;
  constructor() {this.reset(); }

  ngOnInit() {
  }

  addHero(name: string){
    name = name.trim();
    if (!name){return;}
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset(){
    this.heroes = this.heroes.slice();
  }

}
