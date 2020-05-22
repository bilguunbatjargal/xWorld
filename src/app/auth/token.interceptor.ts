import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from  'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class TokenInterceptor  implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
  }
}