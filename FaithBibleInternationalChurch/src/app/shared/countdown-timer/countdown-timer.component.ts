import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = new Date('2020-12-11 24:00:00');
  
  triggerFunction() {
    console.log('Timer Ended');
  }

}
