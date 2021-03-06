import * as MatchActions from './match.actions'
import { Match } from '../../models/match.model'


export interface State {
    pendingMatches: Match[],
    liveMatches: Match[],
    lastUpdated: number,
    error: boolean,
    errorCode: number,
    loading: boolean
}

const initialState = {
    pendingMatches: [],
    liveMatches: [],
    lastUpdated: new Date().getTime(),
    error: false,
    errorCode: null,
    loading: false
};

export function matchReducer(state = initialState, action: MatchActions.MatchActions): State {
    switch (action.type) {
        case MatchActions.TRY_GET_PENDING_MATCHES:
            return {
                ...state,
                loading: true
            }
        case MatchActions.GET_PENDING_MATCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                pendingMatches: action.payload
            }
        case MatchActions.GET_PENDING_MATCHES_FAILED:
            return {
                ...state,
                loading: false
            }
        case MatchActions.ADD_MATCH_FOR_LIVE_UPDATE:
            return {
                ...state,
                liveMatches: [...state.liveMatches, action.payload]
            }
        case MatchActions.REMOVE_MATCH_OF_LIVE_UPDATE:
            let matchIndex = state.liveMatches.findIndex(x => x.id == action.payload)
            state.liveMatches.splice(matchIndex, 1)
            return {
                ...state
            }
        case MatchActions.UPDATE_LIVE_MATCHES_SUCCESS:
            console.log("Action payload")
            console.log(action.payload)
            
            return {
                ...state,
                liveMatches: action.payload
            }
        case MatchActions.UPDATE_LIVE_MATCHES_FAIL:
            return {
                ...state,
                error: true,
                errorCode: action.payload
            }
        case MatchActions.RESET_STATE: 
            return {
                pendingMatches: [],
                liveMatches: [],
                lastUpdated: new Date().getTime(),
                error: false,
                errorCode: null,
                loading: false
            }
        case MatchActions.DO_NOTHING:
            return state;
        default: 
            return state;
        }
    
}