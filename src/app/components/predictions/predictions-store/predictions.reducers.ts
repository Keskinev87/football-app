import * as PredictionsActions from './predictions.actions'
import { Prediction } from '../../models/prediction.model'

export interface State {
    predictions: Prediction[],
    loading: boolean
}

const initialState: State = {
    predictions: [],
    loading: false
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
        console.log("Reducer Prediction: " + action.payload)
        console.log(state.predictions)
            return {
                ...state,
                predictions:[...state.predictions, action.payload],
                loading: false
            }
        case PredictionsActions. TRY_GET_PREDICTIONS:
            return {
                ...state,
                loading: true
            }
        case PredictionsActions.GET_PREDICTIONS_SUCCESS: 
            return {
                ...state,
                predictions: action.payload,
                loading: false
            }
        case PredictionsActions.GET_PREDICTIONS_FAIL:
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
            return {
                ...state,
                loading: false
                //TODO: update the prediction in the local state too
            }
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