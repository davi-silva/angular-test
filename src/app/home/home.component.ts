import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  resetCounter() {
    this.clickCounter = 0;
  }

  setClasses() {
    const myClasses = {
      active: this.clickCounter > 4,
      notActive: this.clickCounter <= 4,
    };
    return myClasses;
  }

}
