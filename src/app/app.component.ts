import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'body',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  routerEvents$: Observable<any>;

  constructor(router: Router, route: ActivatedRoute) {
    this.routerEvents$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(evt => console.log('router evt', evt)));
  }

  ngOnInit() { }


}
