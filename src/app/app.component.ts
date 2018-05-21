import { Component } from '@angular/core';
import { state, trigger, style, transition, animate, keyframes } from '@angular/animations';

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
      ]),
    ]),
    trigger('list1', [
      state('anyName',style({
        opacity : 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', animate(300, 
        style({
          opacity:0, 
          transform: 'translateX(100px)'})
        ))     
    ]),
    trigger('list2', [
      state('anyName',style({
        opacity : 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', animate(1000,keyframes([
          style({
            opacity: 100,
            transform: 'translateX(-100px)',
            offset:0
          }),
          style({
            opacity: 50,
            transform: 'translateX(-30px)',
            offset: 0.2
          }),
          style({
            opacity: 0,
            transform: 'translateX(0)',
            offset: 1
          })
      ]))),
      transition('* => void', animate(1000,keyframes([
        style({
          opacity: 100,
          transform: 'translateX(-100px)',
          offset:0
        }),
        style({
          opacity: 50,
          transform: 'translateX(-30px)',
          offset: 0.2
        }),
        style({
          opacity: 0,
          transform: 'translateX(0)',
          offset: 1
        })
      ]))),
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

    onDelete(item){
      this.list.splice(this.list.indexOf(item), 1);
    }

    onAnimate(){
      this.state === 'normal' ? this.state="highlighted" : this.state="normal";
      this.wildState === 'normal' ? this.wildState="highlighted" : this.wildState="normal";
    
    }

    onAnimateStart(event){
      console.log(event);
    }

    onAnimateDone(event){
      console.log(event);
    }

    onShrink(){
      this.wildState = "shrinked";
    }
}
