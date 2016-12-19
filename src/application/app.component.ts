import { Component } from '@angular/core';

import {loginService} from './app.login.service';

@Component({
  selector: 'my-app',
  templateUrl:'build/templates/login.html'
})
export class AppComponent { 
    title = 'Angular Demo'; 
    loginModel={
        userId:'',
        password:''
    };
    constructor(private _loginService:loginService){

    };
    login(loginModel):void{
        //console.log(loginModel);
        this._loginService.authenticate(loginModel).then((response) => {
            console.log(response);
            if(response.status==='success'){
                alert("Success");
            }
        })
    };
}
