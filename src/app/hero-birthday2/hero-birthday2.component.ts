import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
  <p>The hero's birthday is {{ birthday | date:format }}</p>
  <button (click)="toggleFormat()">Toggle Format</button>
`
})
export class HeroBirthday2Component implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  constructor() { }

  ngOnInit() {
  }

  toggleFormat() { this.toggle = !this.toggle; }

}
