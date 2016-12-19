import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';//to use ngModel

import {HttpModule} from '@angular/http';

import {loginService} from './app.login.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[loginService]
})
export class AppModule { }
