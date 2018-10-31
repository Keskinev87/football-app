import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../environments/environment'

import * as GameActions from './games.actions'
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import Game from "games.model";
import { Store } from "@ngrx/store";
import { of } from "rxjs";


@Injectable()
export class GameEffects {

    @Effect()
    gameCreate = this.actions$
        .ofType(GameActions.BEGIN_CREATE_GAME)
        .pipe(map((action: GameActions.BeginCreateGame) => {
            return action.payload
        })).pipe(map((game: Game) => {
            this.httpClient.post(environment.apiUrl + 'game/create', game, {observe: 'body'}).pipe(map((body: any) => {
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