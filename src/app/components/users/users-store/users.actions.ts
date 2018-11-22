import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const TRY_GET_USER = "TRY_GET_USER"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILED = "GET_USER_FAILED"

export class TryGetUser implements Action {
    readonly type = TRY_GET_USER
}
export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS

    constructor(public payload: User) {}
}

export class GetUserFailed implements Action {
    readonly type = GET_USER_FAILED

    constructor(public payload: number) {}
}


export type UsersActions = TryGetUser | GetUserSuccess | GetUserFailed 