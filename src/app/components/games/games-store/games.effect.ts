import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../environments/environment'

import * as GameActions from './games.actions'
import * as CompetitionsActions from '../../competitions/competitions-store/competitions.actions'
import * as MatchActions from '../../matches/match-store/match.actions'
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
                        payload: game
                    }]
            }), catchError((error) => {
                return of(new GameActions.CreateGameFailed(error.code))
            }))
        }))
         
    @Effect()
    getGamesByUserId = this.actions$
        .ofType(GameActions.TRY_GET_ALL_GAMES_BY_USER_ID)
        .pipe(switchMap(() => {
            return this.httpClient.get<Game[]>(environment.apiUrl + "/game/getAll", {observe: 'body'}).pipe(mergeMap((games) => {
                let competitionIds = []
                for (let game of games) {
                    competitionIds = competitionIds.concat(game.competitions)
                }
                    return [{
                        type: GameActions.GET_ALL_GAMES_BY_USER_ID,
                        payload: games
                    },
                    {
                        type: MatchActions.TRY_GET_MATCHES,
                        payload: competitionIds
                    }]
            }), catchError(error => {
                return of(new GameActions.GetGamesFailed())
            }))
        }))

    @Effect()
    //TODO: Complete the method after creating /game/edit 
    updateGameCompetitions = this.actions$
        .ofType(GameActions.UPDATE_GAME_COMPETITIONS)
        .pipe(map((action: GameActions.UpdateGameCompetitions) => {
            return action.payload
        })).pipe(switchMap((game:Game) => {
            console.log("Effect")
            console.log(game)
            return this.httpClient.post(environment.apiUrl + "/game/addCompetitions", game, {observe: 'body'}).pipe(map((resGame: Game) => {
                if (resGame) {
                    console.log("Res game")
                    console.log(resGame)
                    this.router.navigate(['/games'])
                    return {
                        type: GameActions.RESET_STATE
                    }
                } else {
                    console.log("error")
                    return {
                        type: GameActions.GET_GAMES_FAILED
                    }
                }
            }), catchError(error => {
                return of(new GameActions.GetGamesFailed())
            }))
        }))


    constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}
}