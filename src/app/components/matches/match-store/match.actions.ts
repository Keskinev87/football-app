import { Action } from "@ngrx/store";
import { Match } from '../../models/match.model'
import { Competition } from "../../models/competition.model";
import { Prediction } from "../../models/prediction.model";


export const TRY_GET_MATCHES = "TRY_GET_MATCHES"
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS"
export const GET_MATCHES_FAILED = "GET_MATCHES_FAILED"
export const SCHEDULE_UPDATE_LIVE_SCORE = "SCHEDULE_UPDATE_LIVE_SCORE" //this will be used to begin polling the server in order to update the match score result live
export const UPDATE_LIVE_MATCH = "UPDATE_LIVE_MATCH"
export const STOP_LIVE_UPDATE = "STOP_LIVE_UPDATE"
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

export class ScheduleUpdateLiveScore implements Action {
    readonly type = SCHEDULE_UPDATE_LIVE_SCORE

    constructor(public payload: {
        miliseconds: number, //this is the time until the match begins. The timer will be scheduled to begin when the match starts
        matchId: number
    }) {}
}

export class UpdateLiveMatch implements Action {
    readonly type = UPDATE_LIVE_MATCH

    constructor(public payload: Match) {}
}

export class StopLiveUpdate implements Action {
    readonly type = STOP_LIVE_UPDATE
}

export class DoNothing implements Action {
    readonly type = DO_NOTHING
}

export class ResetState implements Action {
    readonly type = RESET_STATE
}


export type MatchActions = TryGetMatches | GetMatchesSuccess | GetMatchesFailed | ScheduleUpdateLiveScore | UpdateLiveMatch | StopLiveUpdate | ResetState