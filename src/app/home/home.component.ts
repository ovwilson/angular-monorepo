import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
