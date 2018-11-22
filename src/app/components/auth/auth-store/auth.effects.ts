import { Effect, Actions } from "@ngrx/effects"
import { Injectable } from "@angular/core";

import * as AuthActions from "./auth.actions";
import * as GamesActions from "../../games/games-store/games.actions"
import * as CompetitionsActions from "../../competitions/competitions-store/competitions.actions"
import * as MatchActions from "../../matches/match-store/match.actions"
import * as PredictionsActions from "../../predictions/predictions-store/predictions.actions"
import * as UsersActions from "../../users/users-store/users.actions"
import { map, switchMap, mergeMap, catchError } from "rxjs/operators";
import { User } from "../../models/user.model";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
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
                    },
                    {
                        type: UsersActions.TRY_GET_USER
                    }
                ]
            }),catchError((error: any) => {
                console.log("error")
                return of(new AuthActions.SigninFailed(error.error.error || "No connection to the server!"))
            })
            )
        }))
        
        
        //deprecated - use users effects for initial loading
    // @Effect()
    // authCheckStatus = this.actions$
    //     .ofType(AuthActions.CHECK_STATUS)
    //     .pipe(mergeMap(() => {
    //         let token = localStorage.getItem('token')
    //         if (token) {
    //             setTimeout(function(){ console.log("success")}, 3000);
    //             return [{
    //                 type: AuthActions.SIGNIN
    //             },{
    //                 type: AuthActions.SET_TOKEN,
    //                 payload: token
    //             },
    //             {
    //                 type: GamesActions.TRY_GET_ALL_GAMES_BY_USER_ID
    //             },
    //             {
    //                 type: CompetitionsActions.TRY_GET_COMPETITIONS
    //             },
    //             {
    //                 type: PredictionsActions.TRY_GET_PREDICTIONS
    //             }]
    //         } else {
    //             this.router.navigate(['/login'])
    //             return [{
    //                 type: AuthActions.SIGNIN_FAILED
    //             }]
    //         } 
    //     }))

        
    @Effect()
    logout = this.actions$
        .ofType(AuthActions.TRY_LOGOUT)
        .pipe(mergeMap(() => {
            localStorage.removeItem('token')
            this.router.navigate(['/'])
            return [{
                type: AuthActions.LOGOUT
            },{
                type: GamesActions.RESET_STATE
            },{
                type: CompetitionsActions.RESET_STATE
            }, {
                type: MatchActions.RESET_STATE
            }]
        }))
        


    constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}


            
    
    
}