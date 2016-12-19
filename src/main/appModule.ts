import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//to use ngModel
import { LoginModule } from '../shared/auth/loginModule'
//import {HttpModule} from '@angular/http';

import {AppComponent} from './appComponent'
import { AppRoutingModule }   from './appRouteModule';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,LoginModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:[]
})
export class AppModule { }
