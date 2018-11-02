import { Action } from "@ngrx/store";
import { Competition } from "../../models/competition.model";



export const TRY_GET_COMPETITIONS = "TRY_GET_COMPETITIONS"
export const SET_COMPETITIONS = "SET_COMPETITIONS"
export const GET_COMPETITIONS_FAILED = "GET_COMPETITIONS_FAILED"
export const RESET_STATE = "RESET_STATE"

export class TryGetCompetitions implements Action {
    readonly type = TRY_GET_COMPETITIONS
}

export class SetCompetitions implements Action {
    readonly type = SET_COMPETITIONS

    constructor(public payload: Competition[]) {}
}

export class GetCompetitionsFailed implements Action {
    readonly type = GET_COMPETITIONS_FAILED
}

export class ResetState implements Action {
    readonly type = RESET_STATE
}

export type CompetitionsActions = TryGetCompetitions | SetCompetitions | GetCompetitionsFailed | ResetState