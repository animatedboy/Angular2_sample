import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent }  from './Component/loginComponent';
import { FormsModule } from '@angular/forms';//to use ngModel

import { RouterModule }        from '@angular/router';
import {HttpModule} from '@angular/http';

import {loginService} from './Services/loginService';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule, RouterModule.forChild([ { path: 'login', component: LoginComponent}])],
  declarations: [ LoginComponent ],
  //bootstrap:    [ LoginComponent ],
  //exports:      [ LoginComponent ],
  providers:[loginService]
})

export class LoginModule { }
