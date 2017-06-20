import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        // This doesn't work in Edge
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  someProperty:string = '';
  state:string = 'small';
  constructor(private dataService:DataService) {

  }
  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData()
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
