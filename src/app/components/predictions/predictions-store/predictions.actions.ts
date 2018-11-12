import { Action } from "@ngrx/store";
import { Prediction } from "../../models/prediction.model";



export const TRY_SAVE_PREDICTION = "TRY_SAVE_PREDICTION"
export const SAVE_PREDICTION_FAILED = "SAVE_PREDICTION_FAILED"
export const SAVE_PREDICTION_SUCCESS = "SAVE_PREDICTION_SUCCESS"
export const TRY_GET_PREDICTIONS = "TRY_GET_PREDICTIONS"
export const GET_PREDICTIONS_SUCCESS = "GET_PREDICTIONS_SUCCESS"
export const GET_PREDICTIONS_FAIL = "GET_PREDICTIONS_FAIL"
export const TRY_EDIT_PREDICTION = "TRY_EDIT_PREDICTION"
export const EDIT_PREDICTION_SUCCESS = "EDIT_PREDICTION_SUCCESS"
export const EDIT_PREDICTION_FAIL = "EDIT_PREDICTION_FAIL"


export class TrySavePrediction implements Action {
    readonly type = TRY_SAVE_PREDICTION

    constructor(public payload: Prediction) {}
}

export class SavePredictionFailed implements Action {
    readonly type = SAVE_PREDICTION_FAILED
}

export class SavePredictionSuccess implements Action {
    readonly type = SAVE_PREDICTION_SUCCESS

    constructor(public payload: Prediction) {}
}

export class TryGetPredictions implements Action {
    readonly type = TRY_GET_PREDICTIONS
}

export class GetPredictionsSuccess implements Action {
    readonly type = GET_PREDICTIONS_SUCCESS

    constructor(public payload: Prediction[]) {}
}

export class GetPredictionsFail implements Action {
    readonly type = GET_PREDICTIONS_FAIL

}

export class TryEditPrediction implements Action {
    readonly type = TRY_EDIT_PREDICTION

    constructor(public payload: Prediction) {}
}

export class EditPredictionSuccess implements Action {
    readonly type = EDIT_PREDICTION_SUCCESS

    constructor(public payload: Prediction) {}
}

export class EditPredictionFail implements Action {
    readonly type = EDIT_PREDICTION_FAIL
}



export type PredictionsActions = TrySavePrediction 
                                | SavePredictionFailed 
                                | SavePredictionSuccess 
                                | TryGetPredictions 
                                | GetPredictionsSuccess 
                                | GetPredictionsFail
                                | TryEditPrediction
                                | EditPredictionSuccess
                                | EditPredictionFail