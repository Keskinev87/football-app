import { Action } from "@ngrx/store";
import { Game } from "../../models/game.model";

export const TRY_CREATE_GAME = "TRY_CREATE_GAME"
export const CREATE_GAME = "CREATE_GAME";
export const CREATE_GAME_FAILED = "CREATE_GAME_FAILED"
export const ADD_COMPETITION = "ADD_COMPETITION"
export const REMOVE_COMPETITION = "REMOVE_COMPETITION"
export const ADD_MATCHES_BY_COMPETITION_ID = "ADD_MATCHES_BY_COMPETITION"
export const ADD_MATCH_BY_MATCH_ID = "ADD_MATCH_BY_MATCH_ID" 
export const GET_ALL_GAMES_BY_USER_ID = "GET_ALL_GAMES_BY_USER_ID"
export const GET_ALL_GAMES_BY_CREATOR_ID = "GET_ALL_GAMES_BY_CREATOR_ID"
export const GET_GAME_BY_ID = "GET_GAME_BY_ID"
//TODO: 
// export const EDIT_GAME = "EDIT_GAME"
// export const DELETE_GAME = "DELETE_GAME"
// export const JOIN_GAME_BY_CODE = "JOIN_GAME_BY_CODE"
// export const JOIN_GAME_BY_LINK = "JOIN_GAME_BY_LINK"
// export const JOIN_PUBLIC_GAME = "JOIN_PUBLIC_GAME"
export const RESET_STATE =  "RESET_STATE"

export class TryCreateGame implements Action {
    readonly type = TRY_CREATE_GAME

    constructor (public payload: Game) {}
}

export class CreateGame implements Action {
    readonly type = CREATE_GAME
    constructor (public payload: Game) {}
};

export class CreateGameFailed implements Action {
    readonly type = CREATE_GAME_FAILED
}

export class AddCompetition implements Action {
    readonly type = ADD_COMPETITION
    constructor (public payload: { id: number } ) {}
};

export class RemoveCompetition implements Action {
    readonly type = REMOVE_COMPETITION
    constructor (public payload: { id: number }) {}
};

export class AddMatchesByCompetitionId implements Action {
    readonly type = ADD_MATCHES_BY_COMPETITION_ID
    constructor (public payload: { ids: number[] }) {}
};

export class AddMatchByMatchId implements Action {
    readonly type = ADD_MATCH_BY_MATCH_ID
    constructor (public payload: { id: number }) {}
};

export class GetAllGamesByUserId implements Action {
    readonly type = GET_ALL_GAMES_BY_USER_ID
    constructor (public payload: { id: string }) {}
};

export class GetAllGamesByCreatorId implements Action {
    readonly type = GET_ALL_GAMES_BY_CREATOR_ID
    constructor (public payload: { id: string }) {}
};

export class GetGameById implements Action {
    readonly type = GET_GAME_BY_ID
    constructor (public payload: { id: string }) {}
};

export class ResetState implements Action {
    readonly type = RESET_STATE
}

export type GameActions = TryCreateGame| CreateGame | CreateGameFailed | AddCompetition | RemoveCompetition | AddMatchesByCompetitionId | AddMatchByMatchId | GetAllGamesByCreatorId | GetAllGamesByUserId | GetGameById | ResetState