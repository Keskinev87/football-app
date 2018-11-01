import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../environments/environment'

import * as GameActions from './games.actions'
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { Game }  from "../../models/game.model";
import { of } from "rxjs";


@Injectable()
export class GameEffects {

    @Effect()
    gameCreate = this.actions$
        .ofType(GameActions.TRY_CREATE_GAME)
        .pipe(map((action: GameActions.TryCreateGame) => {
            return action.payload
        })).pipe(switchMap((game: Game) => {
            return this.httpClient.post(environment.apiUrl + '/game/create', game, {observe: 'body'}).pipe(map((body: any) => {
                    return {
                        type: GameActions.CREATE_GAME,
                        payload: body.games
                    }
            }), catchError(() => {
                return of(new GameActions.CreateGameFailed())
            }))
        }))
        

    constructor(private actions$: Actions, private httpClient: HttpClient) {}
}