import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['../app.component.scss','./personal-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoComponent implements OnInit {
  
  myDateValue: Date;

  constructor() { }

  ngOnInit() {
    this.myDateValue = new Date();
  }

}
