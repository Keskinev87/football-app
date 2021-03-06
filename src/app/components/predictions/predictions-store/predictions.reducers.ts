import * as PredictionsActions from './predictions.actions'
import { Prediction } from '../../models/prediction.model'

export interface State {
    myPredictions: {},
    loading: boolean,
    error: boolean,
    errorMsg: string
}

const initialState: State = {
    myPredictions: {},
    loading: false,
    error: false,
    errorMsg:''
}

export function predictionsReducer (state = initialState, action: PredictionsActions.PredictionsActions):State {
    switch (action.type) {
        case PredictionsActions.TRY_SAVE_PREDICTION:
            return {
                ...state,
                loading: true
            } 
        case PredictionsActions.SAVE_PREDICTION_FAILED:
            return {
                ...state,
                loading: false
            }
        case PredictionsActions.SAVE_PREDICTION_SUCCESS:
        console.log("Predictions before")
        console.log(state.myPredictions)
        
        state.myPredictions[action.payload.matchId] = action.payload
        console.log(state.myPredictions)
            return {
                ...state,
                loading: false
            }
        case PredictionsActions. TRY_GET_MY_PREDICTIONS:
            return {
                ...state,
                loading: true
            }
        case PredictionsActions.GET_MY_PREDICTIONS_SUCCESS: 
            return {
                ...state,
                myPredictions: action.payload,
                loading: false
            }
        case PredictionsActions.GET_MY_PREDICTIONS_FAIL:
            return {
                ...state,
                loading: false
            }
        case PredictionsActions.TRY_EDIT_PREDICTION:
            return{
                ...state,
                loading: true
            }
        case PredictionsActions.EDIT_PREDICTION_SUCCESS:
            console.log("Predictions before")
            console.log(state.myPredictions)
            state.myPredictions[action.payload.matchId] = action.payload
            console.log("Predictions after")
            console.log(state.myPredictions)
            return {
                ...state,
                loading: false
                //TODO: update the prediction in the local state too
            }
                

            //     const reqGame = state.editedGame
            // const index = reqGame.competitions.indexOf(action.payload)
            // reqGame.competitions.splice(index, 1)
            // console.log(reqGame)
            // var games = [...state.games]
            // games[state.editedGame._id] = reqGame
            // console.log(games)
            // return {
            //     ...state,
            //     games: games
            // }
            // }
        case PredictionsActions.EDIT_PREDICTION_FAIL:
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