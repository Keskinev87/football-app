import * as MatchActions from './match.actions'
import { Match } from '../../models/match.model'


export interface State {
    matches: Match[],
    liveMatches: Match[],
    error: boolean,
    loading: boolean
}

const initialState = {
    matches: [],
    liveMatches: [],
    error: false,
    loading: false
};

export function matchReducer(state = initialState, action: MatchActions.MatchActions): State {
    switch (action.type) {
        case MatchActions.TRY_GET_MATCHES:
            return {
                ...state,
                loading: true
            }
        case MatchActions.GET_MATCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                matches: action.payload
            }
        case MatchActions.GET_MATCHES_FAILED:
            return {
                ...state,
                loading: false
            }
        case MatchActions.SCHEDULE_UPDATE_LIVE_SCORE:
            return {
                ...state
            }  
        case MatchActions.TRY_UPDATE_LIVE_MATCH:
            return {
                ...state
            }
        case MatchActions.UPDATE_LIVE_MATCH:
            const matchIndex = state.matches.findIndex(x => x.id == action.payload.id)
            let matches = state.matches
            let newMatch = matches[matchIndex]
            newMatch.score.fullTime.homeTeam = action.payload.home
            newMatch.score.fullTime.awayTeam = action.payload.away
            matches[matchIndex] = newMatch
            return {
                ...state,
                matches: matches
            }
        case MatchActions.RESET_STATE: 
            return {
                matches: [],
                liveMatches: [],
                error: false,
                loading: false
            }
        default: 
            return state;
        }
    
}