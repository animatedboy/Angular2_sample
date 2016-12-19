import {Injectable} from '@angular/core';

import {Http} from '@angular/http';// service provider for HttpModule
import 'rxjs/add/operator/toPromise'; //for returning promise from service request

@Injectable()
export class loginService{
    constructor(private _http:Http){}
    private _handleError(error:any):Promise<any>{
        console.log('An error occurred', error);
        return Promise.reject(error.message||error);
    };

    authenticate(loginModel):Promise<any>{
             console.log(loginModel);
             return this._http.post('usermanagementapi/auth/authenticate',loginModel)
            .toPromise()
            .then((response) => {
                console.log(response.json());
                return response.json();
            })
            .catch(this._handleError);
    }

}