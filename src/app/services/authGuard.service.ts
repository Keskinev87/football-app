import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import * as fromApp from "../app.reducers"
import * as fromAuth from "../components/auth/auth-store/auth.reducers"
import { Store } from "@ngrx/store";
import { map, take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth')
            .pipe(take(1))
            .pipe(map((authState: fromAuth.State) => {
                return authState.isAuthenticated
            }))
    }


} 