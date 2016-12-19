import { Component } from '@angular/core';
import {Router} from '@angular/router'

import {loginService} from '../Services/loginService';

@Component({
  selector: 'login',
  templateUrl:'build/shared/auth/templates/login.html'
})
export class LoginComponent { 
    title = 'Angular Demo'; 
    loginModel={
        userId:'',
        password:''
    };
    constructor(private _loginService:loginService,private router:Router){

    };
    login(loginModel):void{
        //console.log(loginModel);
        this._loginService.authenticate(loginModel).then((response) => {
            console.log(response);
            if(response.status==='success'){
                //alert("Success");
                this.router.navigateByUrl(`/contact`);
            }
        })
    };
}
