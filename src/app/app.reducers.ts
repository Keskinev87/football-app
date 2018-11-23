import { ActionReducerMap } from '@ngrx/store'

import * as fromGames from './components/games/games-store/games.reducers'
import * as fromAuth from './components/auth/auth-store/auth.reducers'
import * as fromCompetitions from './components/competitions/competitions-store/competitions.reducers'
import * as fromMatches from './components/matches/match-store/match.reducers'
import * as fromPredictions from './components/predictions/predictions-store/predictions.reducers'
import * as fromUsers from './components/users/users-store/users.reducers'

export interface AppState {
    games: fromGames.State,
    auth: fromAuth.State,
    competitions: fromCompetitions.State,
    matches: fromMatches.State,
    predictions: fromPredictions.State,
    users: fromUsers.State
}

export const reducers: ActionReducerMap<AppState> = {
    games: fromGames.gamesReducer,
    auth: fromAuth.authReducer,
    competitions: fromCompetitions.competitionsReducer,
    matches: fromMatches.matchReducer,
    predictions: fromPredictions.predictionsReducer,
    users: fromUsers.usersReducer
}