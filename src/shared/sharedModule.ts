import { NgModule }      from '@angular/core';
import { HttpProxyModule } from './httpProxy/httpProxyModule';
import { LoginModule } from './auth/loginModule'


@NgModule({
  imports: [HttpProxyModule,LoginModule],
  providers:[]
})
export class SharedModule { }