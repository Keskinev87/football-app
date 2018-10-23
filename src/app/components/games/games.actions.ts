import { Action } from "@ngrx/store";
import { Game } from "../models/game.model";

export const ADD_GAME = "ADD_GAME";

export class AddGame implements Action {
    readonly type = ADD_GAME
    constructor (public payload: any) {}
};

export type GameActions = AddGame;