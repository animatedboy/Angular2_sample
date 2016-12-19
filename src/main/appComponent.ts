import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template:'<router-outlet></router-outlet>'
})
export class AppComponent { 
   title:string="Angular 2"
  //  constructor(){
  //    this.title = "Now it should work";
  //  }
}
