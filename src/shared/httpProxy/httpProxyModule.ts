import { HttpProxy  } from './httpInterceptor/httpProxy';
import { XHRBackend, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {LoaderInterceptor} from './loaderInterceptor/loaderInterceptorService';


function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions , loaderInterceptor:LoaderInterceptor){
  let service = new HttpProxy (xhrBackend, requestOptions);
   service.addInterceptor(loaderInterceptor);
  return service;
}

@NgModule({
  imports: [ HttpModule],
  providers: [
      LoaderInterceptor,
    {
      provide: HttpProxy,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions,LoaderInterceptor]
    }
  ]
})

export class HttpProxyModule {}




 
