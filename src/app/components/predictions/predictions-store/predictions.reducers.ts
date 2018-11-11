import * as PredictionsActions from './predictions.actions'
import { Prediction } from '../../models/prediction.model'

export interface State {
    predictions: Prediction[],
    loading: boolean
}

const initialState: State = {
    predictions: undefined,
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
            return {
                //TODO: Update the state with the prediction
                ...state,
                loading: false
            }
        default: 
            return {
                ...state
            }
        

    }
}