import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


export const getAnimations = () => {
    return [
        trigger('wireframeAnimation', [
            state('start', style({ transform: 'translateX(0) scale(1)' })),
            state('end', style({ transform: 'translateX(100%) scale(0)' })),
            //transition('start <=> end', animate('100ms ease-out')),
            // transition('end => start', animate('100ms ease-in')),
            transition('void => start', [style({ transform: 'translateX(-100%)' }), animate(800)]),
            transition('start => end', animate('700ms ease-out', style({ transform: 'translateX(100%) scale(1)' }))),
            transition('void => end', [style({ transform: 'translateX(100%) scale(1)' }), animate(800)]),
            transition('end => start', animate('700ms ease-in', style({ transform: 'translateX(0) scale(1)' })))
        ]),
        trigger('loadAnimation', [
            state('start', style({ opacity: 0 })),
            state('end', style({ opacity: 1 })),
            transition('start <=> end', [animate('1500ms')])

            // transition('start => end',[animate(1000, keyframes([
            //  style({ opacity: 0.1 }),
            //  style({ opacity: 0.3 }),
            //  style({ opacity: 0.5 }),
            //  style({ opacity: 0.7 }),
            //  style({ opacity: 0.9 })
            // style({ opacity: 1 })
            // ])
            // )]),
        ])
    ];
};
