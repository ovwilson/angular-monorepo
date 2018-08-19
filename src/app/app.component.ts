import { Component, OnInit } from '@angular/core';
import { getAnimations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: getAnimations()
})
export class AppComponent implements OnInit {
  title = 'angular-monorepo';
  animationState = 'start';

  ngOnInit() {
    this.animationState = 'start';
    setTimeout(() => {
      this.animationState = 'end';
    }, 4000);
  }

  animateToggle() {
    this.animationState = (this.animationState === 'start' ? 'end' : 'start');
  }
}
