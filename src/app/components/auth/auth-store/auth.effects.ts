import { Effect, Actions } from "@ngrx/effects"
import { Injectable } from "@angular/core";

import * as AuthActions from "./auth.actions";
import { map, switchMap, mergeMap, catchError } from "rxjs/operators";
import { User } from "../../models/user.model";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
import { AuthService } from "../../../services/auth.service";





@Injectable()
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

    
    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .pipe(map((action: AuthActions.TrySignin) => {
            console.log("here2")
            return action.payload
        }))
        .pipe(switchMap((user: User) => {
            return this.httpClient.post('http://localhost:3000/user/login', user, {observe:'body'}).pipe(mergeMap((body: any) => {
                localStorage.setItem('token', body.token)
                return [
                    {
                        type: AuthActions.SIGNIN
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: body.token
                    }
                ]
            }),catchError((error: any) => {
                console.log("error")
                return of(new AuthActions.SigninFailed(error.error.error))
            })
            )
        }))
        
        

    @Effect()
    authCheckStatus = this.actions$
        .ofType(AuthActions.CHECK_STATUS)
        .pipe(mergeMap(() => {
            let token = localStorage.getItem('token')
            if (token) {
                return [{
                    type: AuthActions.SIGNIN
                }]
            } else {
                return [{
                    type: AuthActions.DO_NOTHING
                }]
            } 
        }))
        


    constructor(private actions$: Actions, private httpClient: HttpClient, private helpers: AuthService) {}


            
    
    
}