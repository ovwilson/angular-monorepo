import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../app.animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  animations: [slideInDownAnimation]
})
export class DashboardComponent {

  @HostBinding('@routeAnimation') routeAnimation = 2;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  constructor() { }
}
