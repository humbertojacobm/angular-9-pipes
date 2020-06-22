import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthdayComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  constructor() {

   }

  ngOnInit() {
  }

}
