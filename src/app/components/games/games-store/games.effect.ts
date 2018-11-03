import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../environments/environment'

import * as GameActions from './games.actions'
import * as CompetitionsActions from '../../competitions/competitions-store/competitions.actions'
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap, mergeMap, catchError } from "rxjs/operators";
import { Game }  from "../../models/game.model";
import { of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class GameEffects {

    @Effect()
    gameCreate = this.actions$
        .ofType(GameActions.TRY_CREATE_GAME)
        .pipe(map((action: GameActions.TryCreateGame) => {
            return action.payload
        })).pipe(switchMap((game: Game) => {
            return this.httpClient.post(environment.apiUrl + '/game/create', game, {observe: 'body'}).pipe(mergeMap((game: Game) => {
                console.log(game)
                console.log(game._id)
                    this.router.navigate(['/games/create/competitions'])
                    return [{
                        type: GameActions.CREATE_GAME,
                        payload: game
                    }, {
                        type: GameActions.BEGIN_EDIT_GAME,
                        payload: game._id
                    }]
            }), catchError((error) => {
                return of(new GameActions.CreateGameFailed(error.code))
            }))
        }))
         
    @Effect()
    getGamesByUserId = this.actions$
        .ofType(GameActions.TRY_GET_ALL_GAMES_BY_USER_ID)
        .pipe(switchMap(() => {
            console.log("here")
            return this.httpClient.get<Game[]>(environment.apiUrl + "/game/getAll", {observe: 'body'}).pipe(map((games) => {
                console.log(games)
                    return {
                        type: GameActions.GET_ALL_GAMES_BY_USER_ID,
                        payload: games
                    }
            }), catchError(error => {
                return of(new GameActions.GetGamesFailed())
            }))
        }))

    @Effect()
    //TODO: Complete the method after creating /game/edit 
    updateGame = this.actions$
        .ofType(GameActions.UPDATE_GAME)
        .pipe(map((action: GameActions.UpdateGame) => {
            return action.payload
        })).pipe(switchMap((game:Game) => {
            return this.httpClient.post(environment.apiUrl + "")
        }))


    constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}
}