import { Action } from "@ngrx/store";
import { Match } from '../../models/match.model'
import { Competition } from "../../models/competition.model";
import { Prediction } from "../../models/prediction.model";


export const TRY_GET_MATCHES = "TRY_GET_MATCHES"
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS"
export const GET_MATCHES_FAILED = "GET_MATCHES_FAILED"
export const ADD_MATCH_FOR_LIVE_UPDATE = "ADD_MATCH_FOR_LIVE_UPDATE"
export const REMOVE_MATCH_OF_LIVE_UPDATE = "REMOVE_MATCH_OF_LIVE_UPDATE"
export const TRY_UPDATE_LIVE_MATCHES = "TRY_UPDATE_LIVE_MATCHES"
export const UPDATE_LIVE_MATCHES_SUCCESS = "UPDATE_LIVE_MATCHES_SUCCESS"
export const UPDATE_LIVE_MATCHES_FAIL = "UPDATE_LIVE_MATCHES_FAIL"

export const DO_NOTHING = "DO_NOTHING"
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

export class AddMatchForLiveUpdate implements Action {
    readonly type = ADD_MATCH_FOR_LIVE_UPDATE

    constructor(public payload: Match) {}
}

export class RemoveMatchOfLiveUpdate implements Action {
    readonly type = REMOVE_MATCH_OF_LIVE_UPDATE

    constructor (public payload: number) {}
}

export class TryUpdateLiveMatches implements Action {
    readonly type = TRY_UPDATE_LIVE_MATCHES

    constructor (public payload: Match[]) {}
}

export class UpdateLiveMatchesSuccess implements Action {
    readonly type = UPDATE_LIVE_MATCHES_SUCCESS

    constructor (public payload: Match[]) {}
}

export class UpdateLiveMatchesFail implements Action {
    readonly type = UPDATE_LIVE_MATCHES_FAIL

    constructor (public payload: number) {}
}


export class DoNothing implements Action {
    readonly type = DO_NOTHING
}

export class ResetState implements Action {
    readonly type = RESET_STATE
}


export type MatchActions = TryGetMatches 
                            | GetMatchesSuccess
                            | GetMatchesFailed
                            | AddMatchForLiveUpdate
                            | RemoveMatchOfLiveUpdate
                            | TryUpdateLiveMatches
                            | UpdateLiveMatchesSuccess
                            | UpdateLiveMatchesFail
                            | DoNothing
                            | ResetState