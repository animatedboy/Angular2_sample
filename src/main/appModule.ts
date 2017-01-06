import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//to use ngModel
import { SharedModule } from '../shared/sharedModule'
//import {HttpModule} from '@angular/http';

import {AppComponent} from './appComponent'
import { AppRoutingModule }   from './appRouteModule';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,SharedModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:[]
})
export class AppModule { }
