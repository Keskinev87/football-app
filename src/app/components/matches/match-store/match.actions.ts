import { Action } from "@ngrx/store";
import { Match } from '../../models/match.model'
import { Competition } from "../../models/competition.model";
import Prediction from "../../models/prediction.model";


export const TRY_GET_MATCHES = "TRY_GET_MATCHES"
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS"
export const GET_MATCHES_FAILED = "GET_MATCHES_FAILED"
export const TRY_MAKE_PREDICTION = "TRY_MAKE_PREDICTION"
export const PREDICTION_FAILED = "PREDICTION_FAILED"
export const PREDICTION_SUCCESS = "PREDICTION_SUCCESS"
export const RESET_STATE = "RESET_STATE"

export class TryGetMatches implements Action {
    readonly type = TRY_GET_MATCHES

    constructor(public payload: Array<number>) {}
}

export class GetMatchesSuccess implements Action {
    readonly type = GET_MATCHES_SUCCESS

    constructor(public payload: Match[]) {}
}

export class GetMatchesFailed implements Action {
    readonly type = GET_MATCHES_FAILED
}

export class TryMakePrediction implements Action {
    readonly type = TRY_MAKE_PREDICTION

    constructor (public payload: Prediction) {}
}

export class PredictionFailed implements Action {
    readonly type = PREDICTION_FAILED
}

export class PredictionSuccess implements Action {
    readonly type = PREDICTION_SUCCESS


}

export class ResetState implements Action {
    readonly type = RESET_STATE
}


export type MatchActions = TryGetMatches | GetMatchesSuccess | GetMatchesFailed | TryMakePrediction | PredictionFailed | PredictionSuccess | ResetState