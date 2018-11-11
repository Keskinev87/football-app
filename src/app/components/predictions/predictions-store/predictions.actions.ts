import { Action } from "@ngrx/store";
import { Prediction } from "../../models/prediction.model";



export const TRY_SAVE_PREDICTION = "TRY_SAVE_PREDICTION"
export const SAVE_PREDICTION_FAILED = "SAVE_PREDICTION_FAILED"
export const SAVE_PREDICTION_SUCCESS = "SAVE_PREDICTION_SUCCESS"


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



export type PredictionsActions = TrySavePrediction | SavePredictionFailed | SavePredictionSuccess