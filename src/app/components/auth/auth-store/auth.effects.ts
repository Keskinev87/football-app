import { Effect, Actions } from "@ngrx/effects"
import { Injectable } from "@angular/core";

import * as AuthActions from "./auth.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { User } from "../../models/user.model";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    @Effect()
    
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .pipe(map((action: AuthActions.TrySignup) => {
            return action.payload
        })).pipe(switchMap((user: User) => {
            return this.httpClient.post('http://localhost:3000/user/register', user, {observe:'body'}).pipe(
                map((body) => new AuthActions.Signup()),
                catchError(error => {
                    return of(new AuthActions.SignupFailed(error.error.error))
                })
            )
        }))

    constructor(private actions$: Actions, private httpClient: HttpClient) {}



}