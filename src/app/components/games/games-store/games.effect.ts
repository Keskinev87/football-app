import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../environments/environment'

import * as GameActions from './games.actions'
import * as CompetitionsActions from '../../competitions/competitions-store/competitions.actions'
import * as MatchActions from '../../matches/match-store/match.actions'
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap, mergeMap, catchError, concatMap } from "rxjs/operators";
import { Game }  from "../../models/game.model";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { ModalService } from "src/app/services/modal.service";


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
                console.log("Code")
                console.log(error.status)
                return of(new GameActions.CreateGameFailed(error.code))
            }))
        }))
         
    @Effect()
    getGamesByUserId = this.actions$
        .ofType(GameActions.TRY_GET_ALL_GAMES_BY_USER_ID)
        .pipe(concatMap(() => {
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
                    }
                ]
            }), catchError(error => {
                return of(new GameActions.GetGamesFailed(error.status))
            }))
        }))

    @Effect()
    //TODO: Complete the method after creating /game/edit 
    updateGameCompetitions = this.actions$
        .ofType(GameActions.TRY_UPDATE_GAME_COMPETITIONS)
        .pipe(map((action: GameActions.UpdateGameCompetitions) => {
            return action.payload
        })).pipe(switchMap((game:Game) => {
            console.log("Effect")
            console.log(game)
            return this.httpClient.post(environment.apiUrl + "/game/addCompetitions", game, {observe: 'body'}).pipe(mergeMap((resGame: Game) => {
                if (resGame) {
                    console.log("Res game")
                    console.log(resGame)
                    this.router.navigate(['/games/create/score-rules'])
                    return [{
                        type: GameActions.UPDATE_GAME_COMPETITIONS,
                        payload: resGame
                    }, {
                        type: GameActions.BEGIN_EDIT_GAME_RULES,
                        payload: resGame
                    }]
                } else {
                    console.log("error")
                    return [{
                        type: GameActions.GET_GAMES_FAILED
                    }]
                }
            }), catchError(error => {
                return of(new GameActions.GetGamesFailed(error.code))
            }))
        }))

    @Effect()
    joinGameByCode = this.actions$
        .ofType(GameActions.TRY_JOIN_GAME_BY_CODE)
        .pipe(map((action: GameActions.TryJoinGameByCode) => {
            return action.payload
        }))
        .pipe(switchMap((code: object) => {
            console.log("Effect here")
            console.log(code)
            return this.httpClient.post(environment.apiUrl + "/game/joinWithCode", code, {observe: 'body'}).pipe(mergeMap((resGame: Game) => {
                if(resGame) {
                    //close the modal. We know that the action was dispatched through an opened modal.
                    this.modalService.close("custom-modal-1")
                    return [{
                        type: GameActions.JOIN_GAME_BY_CODE_SUCCESS,
                        payload: resGame
                    },
                    {
                        type: GameActions.RESET_EDIT_STATE
                    },
                    {
                        type: GameActions.TRY_GET_ALL_GAMES_BY_USER_ID
                    }]
                }
                else {
                    return [{
                        type: GameActions.JOIN_GAME_BY_CODE_FAIL
                    }]
                }
            }), catchError(error => {
                return of(new GameActions.JoinGameByCodeFail(error.status))
            }))
        }))

    @Effect() 
    saveGameRules = this.actions$
        .ofType(GameActions.TRY_SAVE_GAME_RULES)
        .pipe(map((action: GameActions.TrySaveGameRules) => {
            return action.payload
        }))
        .pipe(switchMap((game: Game) => {
            return this.httpClient.post(environment.apiUrl + "/game/saveGameRules", game, {observe: 'body'}).pipe(map((resGame:Game) => {
                    return {
                        type: GameActions.SAVE_GAME_RULES_SUCCESS,
                        payload: resGame
                    }
            }),catchError(error => {
                return of(new GameActions.SaveEditGameRulesFailed(error.status))
            }))

        }))


    constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router, private modalService: ModalService) {}
}