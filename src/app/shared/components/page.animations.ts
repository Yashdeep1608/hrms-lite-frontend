import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true
    }),
    group([
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),
      query(':leave', [
        animate('300ms ease', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ], { optional: true })
    ])
  ])
]);
export const authRouteTransitionAnimations = trigger('authRouteTransitionAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      })
    ], { optional: true }),

    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 })
    ], { optional: true }),

    group([
      query(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ], { optional: true }),

      query(':enter', [
        animate('300ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true })
    ])
  ])
]);
