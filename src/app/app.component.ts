import { Component } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted',style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(500))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted',style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      state('shrinked',style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(500)),
      transition('shrinked<=>*', [
        style({
          'background-color' : 'yellow'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(200)
      ])
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state:string = "highlighted";
  wildState: string = 'normal';


    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.state === 'normal' ? this.state="highlighted" : this.state="normal";
      this.wildState === 'normal' ? this.wildState="highlighted" : this.wildState="normal";
    
    }

    onShrink(){
      this.wildState = "shrinked";
    }
}
