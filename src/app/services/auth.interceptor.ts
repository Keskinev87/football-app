import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs'
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        let token:string = localStorage.getItem('token')
        let apiToken:string = 'f8a83daa19804e2a966103601127b9b5'
        const reqCopy = req.clone({ headers: new HttpHeaders().append("Authorization", "Bearer " + token).append('X-Auth-Token', apiToken)})
        return next.handle(reqCopy)
    }
}