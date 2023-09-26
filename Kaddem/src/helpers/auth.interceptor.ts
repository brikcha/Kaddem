import { Injectable } from "@angular/core";
import { HttpHandler } from "@angular/common/http";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpEvent } from "@angular/common/http";
import { TokenStorageService } from "app/login/services/token-storage.service";
//const TOKEN_HEADER_KEY = 'Authorization' // for Spring Boot Back-end // Needs to change to express

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)})
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY,'Bearer ' + token)})
    }
    return next.handle(authReq);    
  }
}

export const AuthInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

  

