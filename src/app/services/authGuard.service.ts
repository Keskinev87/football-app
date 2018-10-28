import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { AuthService } from "./auth.service";
import * as fromApp from "../app.reducers"
import * as fromAuth from "../components/auth/auth-store/auth.reducers"
import { Store } from "@ngrx/store";
import { map } from "rxjs/internal/operators/map";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').pipe(map((authState: fromAuth.State) => {
            return authState.isAuthenticated
        }))
    }


} 