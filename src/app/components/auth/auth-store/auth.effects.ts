import { Effect, Actions } from "@ngrx/effects"
import { Injectable } from "@angular/core";

import * as AuthActions from "./auth.actions";
import * as GamesActions from "../../games/games-store/games.actions"
import * as CompetitionsActions from "../../competitions/competitions-store/competitions.actions"
import * as MatchActions from "../../matches/match-store/match.actions"
import { map, switchMap, mergeMap, catchError } from "rxjs/operators";
import { User } from "../../models/user.model";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
import { AuthService } from "../../../services/auth.service";
import { environment } from '../../../../environments/environment'
import { Router } from "@angular/router";





@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .pipe(map((action: AuthActions.TrySignup) => {
            return action.payload
        })).pipe(switchMap((user: User) => {
            return this.httpClient.post(environment.apiUrl + '/user/register', user, {observe:'body'}).pipe(
                map((body: any) =>{
                    this.router.navigate(['/login'])
                    return {
                        type: AuthActions.SIGNUP
                    }
                }),
                catchError(error => {
                    return of(new AuthActions.SignupFailed(error.error.error || "No connection to the server!"))
                })
            )    
        }))

    
    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .pipe(map((action: AuthActions.TrySignin) => {
            return action.payload
        }))
        .pipe(switchMap((user: User) => {
            return this.httpClient.post(environment.apiUrl + '/user/login', user, {observe:'body'}).pipe(mergeMap((body: any) => {
                localStorage.setItem('token', body.token)
                this.router.navigate(['/pending-matches'])
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
                return of(new AuthActions.SigninFailed(error.error.error || "No connection to the server!"))
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
                },{
                    type: AuthActions.SET_TOKEN,
                    payload: token
                },{
                    type: GamesActions.TRY_GET_ALL_GAMES_BY_USER_ID
                },{
                    type: CompetitionsActions.TRY_GET_COMPETITIONS
                },{
                    type: MatchActions.TRY_GET_MATCHES
                }]
            } else {
                return [{
                    type: AuthActions.DO_NOTHING
                }]
            } 
        }))

        
    @Effect()
    logout = this.actions$
        .ofType(AuthActions.TRY_LOGOUT)
        .pipe(map(() => {
            localStorage.removeItem('token')
            this.router.navigate(['/'])
            return {
                type: AuthActions.LOGOUT
            }
        }))
        


    constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}


            
    
    
}