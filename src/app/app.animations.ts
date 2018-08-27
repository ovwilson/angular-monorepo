import { animate, state, style, transition, trigger, group, query } from '@angular/animations';

// // Component transition animations
export const slideInDownAnimation =
  trigger('routeAnimation', [
    state('*',
      style({
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        height: '!',
        transform: 'translateX(100%)'
      }),
      animate('0.8s cubic-bezier(.35, 0, .25, 1)')
    ]),
    // transition(':leave', [
    //   animate('0.8s cubic-bezier(.35, 0, .25, 1)', style({
    //     height: '!',
    //     transform: 'translateX(-100%)',
    //     position: 'absolute'
    //   }))
    // ])
  ]);

// Component transition animations
export const routerOutletAnimation =
  trigger('routerAnimation', [
    transition('1 => 2', [
      style({ height: '!' }),
      query(':enter', style({ transform: 'translateX(100%)' })),
      query(':enter, :leave', style({ position: 'absolute', top: 1, left: 0, right: 0 })),
      group([
        query(':leave', [animate('0.8s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)' }))]),
        query(':enter', [animate('0.8s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)' }))])
      ])
    ]),
    transition('2 => 1', [
      style({ height: '!' }),
      query(':enter', style({ transform: 'translateX(-100%)' })),
      query(':enter, :leave', style({ position: 'absolute', top: 1, left: 0, right: 0 })),
      group([
        query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)' }))]),
        query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)' }))])
      ])
    ])
  ]);
