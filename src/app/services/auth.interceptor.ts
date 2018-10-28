import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs'
import { Injectable } from "@angular/core";
import * as fromApp from "../app.reducers"
import * as fromAuth from "../components/auth/auth-store/auth.reducers"
import { Store } from "@ngrx/store";
import { map } from "rxjs/internal/operators/map";
import { switchMap } from "rxjs/operators";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req)
        // return this.store.select('auth').pipe(switchMap((authState: fromAuth.State) => {
        //     let token:string = localStorage.getItem('token')
        //     const reqCopy = req.clone({ headers: new HttpHeaders().append("Authorization", "Bearer " + token)})
        //     console.log(authState.token)
        //     return next.handle(reqCopy)
        // }))
        
    }
}