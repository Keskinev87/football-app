import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs'
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        let token:string = localStorage.getItem('token')
        const reqCopy = req.clone({ headers: new HttpHeaders().append("Authorization", "Bearer " + token)})
        return next.handle(reqCopy)
    }
}