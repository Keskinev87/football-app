import { ActionReducerMap } from '@ngrx/store'

import * as fromGames from './components/games/games.reducers'

export interface AppState {
    games: fromGames.State
}

export const reducers: ActionReducerMap<AppState> = {
    games: fromGames.gamesReducer
}