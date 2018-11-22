import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../environments/environment'
import * as AuthActions from '../../auth/auth-store/auth.actions'
import * as UsersActions from './users.actions' 
import * as GamesActions from '../../games/games-store/games.actions'
import * as CompetitionsActions from '../../competitions/competitions-store/competitions.actions'
import * as PredictionsActions from '../../predictions/predictions-store/predictions.actions'
import { mergeMap, map, switchMap, catchError } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of } from "rxjs";


@Injectable()
export class UsersEffects {
    @Effect()
    initialLoding = this.actions$
        .ofType(UsersActions.TRY_GET_USER)
        .pipe(switchMap(() => {
            
            let token = localStorage.getItem('token')
            console.log("Token is: " + token )
            //check if a token is in the local storage
            if (token) {
                
                return this.httpClient.get(environment.apiUrl + '/user/get', {observe:'body'})
                    .pipe(mergeMap((user:User) => {
                        this.router.navigate(['/pending-matches'])
                        return [{
                            type: AuthActions.SIGNIN
                        },
                        {
                            type: UsersActions.GET_USER_SUCCESS,
                            payload: user
                        },
                        {
                            type: GamesActions.TRY_GET_ALL_GAMES_BY_USER_ID
                        },
                        {
                            type: CompetitionsActions.TRY_GET_COMPETITIONS
                        },
                        {
                            type: PredictionsActions.TRY_GET_PREDICTIONS
                        }]
                    }), catchError(error => {
                        this.router.navigate(['/login'])
                        return of(new AuthActions.SigninFailed(error.status))
                    }))
            } else {
                this.router.navigate(['/login'])
                return [{
                    type: AuthActions.SIGNIN_FAILED
                }]
            } 
        }))

        constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}
}