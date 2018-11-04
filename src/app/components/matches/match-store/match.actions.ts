import { Action } from "@ngrx/store";
import Match from "match.model";


export const TRY_GET_MATCHES = "TRY_GET_MATCHES"
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS"
export const GET_MATCHES_FAILED = "GET_MATCHES_FAILED"

export class TryGetMatches implements Action {
    readonly type = TRY_GET_MATCHES
}

export class GetMatchesSuccess implements Action {
    readonly type = GET_MATCHES_SUCCESS

    constructor(public payload: Match[]) {}
}

export class GetMatchesFailed implements Action {
    readonly type = GET_MATCHES_FAILED
}

export type MatchActions = TryGetMatches | GetMatchesSuccess | GetMatchesFailed