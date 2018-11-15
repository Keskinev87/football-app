import { Action } from "@ngrx/store";
import { Game } from "../../models/game.model";

// actions for creating a game with name, code and url
export const TRY_CREATE_GAME = "TRY_CREATE_GAME"
export const CREATE_GAME = "CREATE_GAME";
export const CREATE_GAME_FAILED = "CREATE_GAME_FAILED"

//actions for adding/removing/editing competitions included in the game
export const BEGIN_EDIT_GAME = "BEGIN_EDIT_GAME"
export const ADD_COMPETITION = "ADD_COMPETITION"
export const REMOVE_COMPETITION = "REMOVE_COMPETITION"
export const TRY_UPDATE_GAME_COMPETITIONS = "TRY_UPDATE_GAME_COMPETITIONS"
export const UPDATE_GAME_COMPETITIONS = "UPDATE_GAME_COMPETITIONS"
export const UPDATE_GAME_COMPETITIONS_FAILED = "UPDATE_GAME_COMPETITIONS_FAILED"

//actions for adding custom matches
export const ADD_MATCHES_BY_COMPETITION_ID = "ADD_MATCHES_BY_COMPETITION"
export const ADD_MATCH_BY_MATCH_ID = "ADD_MATCH_BY_MATCH_ID"

//actions for creating and editing game rules
export const BEGIN_EDIT_GAME_RULES  = "BEGIN_EDIT_GAME_RULES"
export const TRY_SAVE_GAME_RULES = "TRY_SAVE_GAME_RULES"
export const TRY_UPDATE_GAME_RULES = "TRY_UPDATE_GAME_RULES"
export const SAVE_GAME_RULES_SUCCESS = "SAVE_GAME_RULES_SUCCESS"
export const UPDATE_GAME_RULES_SUCCESS = "UPDATE_GAME_RULES_SUCCESS"
export const SAVE_EDIT_GAME_RULES_FAILED = "SAVE_EDIT_GAME_RULES_FAILED"


//actions for getting games
export const TRY_GET_ALL_GAMES_BY_USER_ID = "TRY_GET_ALL_GAMES_BY_USER_ID"
export const GET_ALL_GAMES_BY_USER_ID = "GET_ALL_GAMES_BY_USER_ID"
export const GET_ALL_GAMES_BY_CREATOR_ID = "GET_ALL_GAMES_BY_CREATOR_ID"
export const GET_GAME_BY_ID = "GET_GAME_BY_ID"
export const GET_GAMES_FAILED = "GET_GAMES_FAILED"
export const RESET_EDIT_STATE = "RESET_EDIT_STATE"


//actions for joining a game
//TODO: 
// export const EDIT_GAME = "EDIT_GAME"
// export const DELETE_GAME = "DELETE_GAME"
export const TRY_JOIN_GAME_BY_CODE = "TRY_JOIN_GAME_BY_CODE"
export const JOIN_GAME_BY_CODE_SUCCESS = "JOIN_GAME_BY_CODE_SUCCESS"
export const JOIN_GAME_BY_CODE_FAIL = "JOIN_GAME_BY_CODE_FAIL"
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

    constructor (public payload: number) {}
}

export class BeginEditGame implements Action {
    readonly type = BEGIN_EDIT_GAME

    constructor (public payload: Game) {}
}

export class AddCompetition implements Action {
    readonly type = ADD_COMPETITION
    constructor (public payload: number ) {}
};

export class RemoveCompetition implements Action {
    readonly type = REMOVE_COMPETITION
    constructor (public payload: number) {}
};

export class TryUpdateGameCompetitions implements Action {
    readonly type = TRY_UPDATE_GAME_COMPETITIONS

    constructor(public payload: Game) {}
}

export class UpdateGameCompetitions implements Action {
    readonly type = UPDATE_GAME_COMPETITIONS

    constructor(public payload: Game) {}
}

export class UpdateGameCompetitionsFail implements Action {
    readonly type = UPDATE_GAME_COMPETITIONS_FAILED

    constructor (public payload: number) {}
}

export class BeginEditGameRules implements Action {
    readonly type = BEGIN_EDIT_GAME_RULES

    constructor (public payload: Game) {}
}

export class TrySaveGameRules implements Action {
    readonly type = TRY_SAVE_GAME_RULES

    constructor (public payload: Game) {}
}

export class TryUpdateGameRules implements Action {
    readonly type = TRY_UPDATE_GAME_RULES

    constructor (public payload: Game) {}
}

export class SaveGameRulesSuccess implements Action {
    readonly type = SAVE_GAME_RULES_SUCCESS

    constructor (public payload: Game) {}
}


export class UpdateGameRulesSuccess implements Action {
    readonly type = UPDATE_GAME_RULES_SUCCESS

    constructor (public payload: Game) {}
}

export class SaveEditGameRulesFailed implements Action {
    readonly type = SAVE_EDIT_GAME_RULES_FAILED

    constructor (public payload: number) {}
}

export class AddMatchesByCompetitionId implements Action {
    readonly type = ADD_MATCHES_BY_COMPETITION_ID
    constructor (public payload: { ids: number[] }) {}
};

export class AddMatchByMatchId implements Action {
    readonly type = ADD_MATCH_BY_MATCH_ID
    constructor (public payload: { id: number }) {}
};

export class TryGetAllGamesByUserId implements Action {
    readonly type = TRY_GET_ALL_GAMES_BY_USER_ID
}

export class GetAllGamesByUserId implements Action {
    readonly type = GET_ALL_GAMES_BY_USER_ID
    
    constructor (public payload: Game[]) {}
};

export class GetAllGamesByCreatorId implements Action {
    readonly type = GET_ALL_GAMES_BY_CREATOR_ID
    constructor (public payload: { id: string }) {}
};

export class GetGameById implements Action {
    readonly type = GET_GAME_BY_ID
    constructor (public payload: { id: string }) {}
};

export class GetGamesFailed implements Action {
    readonly type = GET_GAMES_FAILED

    constructor(public payload: number) {}
}

export class TryJoinGameByCode implements Action {
    readonly type = TRY_JOIN_GAME_BY_CODE

    constructor (public payload: object) {}
}

export class JoinGameByCodeSuccess implements Action {
    readonly type = JOIN_GAME_BY_CODE_SUCCESS

    constructor(public payload: Game) {}
}

export class JoinGameByCodeFail implements Action {
    readonly type = JOIN_GAME_BY_CODE_FAIL
}

export class ResetState implements Action {
    readonly type = RESET_STATE
}

export class ResetEditState implements Action {
    readonly type = RESET_EDIT_STATE
}

export type GameActions = TryCreateGame
                            | CreateGame 
                            | CreateGameFailed 
                            | BeginEditGame 
                            | AddCompetition 
                            | TryUpdateGameCompetitions
                            | UpdateGameCompetitions 
                            | UpdateGameCompetitionsFail
                            | BeginEditGameRules
                            | TrySaveGameRules
                            | TryUpdateGameRules
                            | SaveGameRulesSuccess
                            | UpdateGameRulesSuccess
                            | SaveEditGameRulesFailed
                            | RemoveCompetition 
                            | AddMatchesByCompetitionId 
                            | AddMatchByMatchId 
                            | GetAllGamesByCreatorId 
                            | GetAllGamesByUserId 
                            | GetGameById 
                            | ResetState
                            | ResetEditState 
                            | TryGetAllGamesByUserId 
                            | GetGamesFailed
                            | TryJoinGameByCode
                            | JoinGameByCodeSuccess
                            | JoinGameByCodeFail