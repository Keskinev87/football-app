import * as CompetitionsActions from './competitions.actions'
import { Competition } from '../../models/competition.model'
import { Observable } from 'rxjs';


export interface State {
    competitions: any,
    loading: boolean,
    gameEditedId: string
}

const initialState: State = {
    competitions: undefined,
    loading: false,
    gameEditedId: ''
}

export function competitionsReducer (state = initialState, action: CompetitionsActions.CompetitionsActions):State {
    switch (action.type) {
        case CompetitionsActions.TRY_GET_COMPETITIONS:
            return {
                ...state,
                loading: true
            } 
        case CompetitionsActions.SET_COMPETITIONS:
            return {
                ...state,
                competitions: action.payload,
                loading: false
            }
        case CompetitionsActions.GET_COMPETITIONS_FAILED:
            return {
                ...state,
                loading: false
            }
        case CompetitionsActions.RESET_STATE:
            return {
                ...state,
                loading: false
            }
        default: 
            return {
                ...state
            }
        

    }
}