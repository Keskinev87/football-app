import { Action } from "@ngrx/store";
import { User } from "../../models/user.model"

export const SIGNIN = "SIGNIN"  //If the signin is successfull. This will be executed only if the server returns OK
export const TRY_SIGNIN = "TRY_SIGNIN"
export const SIGNIN_FAILED = "SIGNIN_FAILED" //If the SIGNIN failed
export const SIGNUP = "SIGNUP" // This will be executed only if the server returns OK. 
export const TRY_SIGNUP = "TRY_SIGNUP" // This will be executed when the user clicks "Signup". If the signup is successfull, "SIGNUP" will be dispatched
export const SIGNUP_FAILED = "SIGNUP_FAILED" // This will be executed if "TRY_SIGNUP" returns error
export const TRY_LOGOUT = " TRY_LOGOUT" // Will be executed on logout.
export const LOGOUT = "LOGOUT" // If the Logout is successfull
export const CHECK_STATUS = "CHECK_STATUS" // THIS GETS FIRED WHEN THE APP STARTS. Checks if there is a token in the localstorage and if the token is expired.
// If there is no token or it has expired, the "isAuthenticated" will remain false. This is done through the auth.effects.ts
export const SET_TOKEN = "SET_TOKEN" // Sets the token in localstorage
export const GET_TOKEN = "GET_TOKEN" // Gets the token from localstorage
export const DO_NOTHING = "DO_NOTHING"
export const RESET_STATE = "RESET_STATE" //will be dispatched upon destroying a component. Otherwise an error might affect other components.

export class TrySignin implements Action {
    readonly type = TRY_SIGNIN

    constructor(public payload: User) {}
}

export class Signin implements Action {
    readonly type = SIGNIN
};

export class SigninFailed implements Action {
    readonly type = SIGNIN_FAILED

    constructor(public payload: string) {}
}

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

export class TryLogout implements Action {
    readonly type = TRY_LOGOUT
}

export class Logout implements Action {
    readonly type = LOGOUT
}

export class CheckStatus implements Action {
    readonly type = CHECK_STATUS
}

export class SetToken implements Action {
    readonly type = SET_TOKEN

    constructor(public payload: string ) {}
}

export class GetToken implements Action {
    readonly type = GET_TOKEN

    constructor(public payload: String) {}
}

export class DoNothing implements Action {
    readonly type = DO_NOTHING
}

export class ResetState implements Action {
    readonly type = RESET_STATE
}


export type AuthActions = Signin | Signup | Logout | SetToken | TrySignup | SignupFailed | GetToken | CheckStatus | SigninFailed | TrySignin | DoNothing | TryLogout | ResetState