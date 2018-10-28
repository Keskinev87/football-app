import { Action } from "@ngrx/store";
import { User } from "../../models/user.model"

export const SIGNIN = "SIGNIN"
export const SIGNUP = "SIGNUP"
export const TRY_SIGNUP = "TRY_SIGNUP"
export const SIGNUP_FAILED = "SIGNUP_FAILED"
export const LOGOUT = "LOGOUT"
export const SET_TOKEN = "SET_TOKEN"

export class Signin implements Action {
    readonly type = SIGNIN
};

export class TrySignup implements Action {
    readonly type = TRY_SIGNUP

    constructor(public payload: User) {}
}

export class SignupFailed implements Action {
    readonly type = SIGNUP_FAILED

    constructor(public payload: string) {}
}

export class Signup implements Action {
    readonly type = SIGNUP
}

export class Logout implements Action {
    readonly type = LOGOUT
}

export class SetToken implements Action {
    readonly type = SET_TOKEN

    constructor(public payload: string ) {}
}


export type AuthActions = Signin | Signup | Logout | SetToken | TrySignup | SignupFailed