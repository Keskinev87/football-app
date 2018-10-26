import { ActionReducerMap } from '@ngrx/store'

import * as fromGames from './components/games/games.reducers'
import * as fromAuth from './components/auth/auth-store/auth.reducers'

export interface AppState {
    games: fromGames.State,
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
    games: fromGames.gamesReducer,
    auth: fromAuth.authReducer
}