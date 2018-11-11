import * as MatchActions from './match.actions'
import { Match } from '../../models/match.model'


export interface State {
    matches: Match[],
    error: boolean,
    loading: boolean
}

const initialState = {
    matches: [],
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
        case MatchActions.TRY_MAKE_PREDICTION:
            return {
                ...state
            }
        case MatchActions.RESET_STATE: 
            return {
                matches: undefined,
                error: false,
                loading: false
            }
        default: 
            return state;
        }
    
}