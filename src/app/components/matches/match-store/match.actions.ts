import { Action } from "@ngrx/store";
import { Match } from '../../models/match.model'
import { Competition } from "../../models/competition.model";


export const TRY_GET_MATCHES = "TRY_GET_MATCHES"
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS"
export const GET_MATCHES_FAILED = "GET_MATCHES_FAILED"
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

export class ResetState implements Action {
    readonly type = RESET_STATE
}


export type MatchActions = TryGetMatches | GetMatchesSuccess | GetMatchesFailed | ResetState