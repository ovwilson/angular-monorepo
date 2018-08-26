import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { slideInDownAnimation} from './../app.animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInDownAnimation]
})
export class HomeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  constructor() { }

  ngOnInit() {
  }

}
