import * as AuthActions from './auth.actions'
import { fakeAsync } from '@angular/core/testing';


export interface State {
    token: String,
    isAuthenticated: boolean
}

const initialState = {
    token: '',
    isAuthenticated: false
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    
    switch (action.type) {
        case(AuthActions.SIGNUP):
            return {
                ...state,
                isAuthenticated: true
            }
        case(AuthActions.SIGNIN):
            return {
                ...state,
                isAuthenticated: true
            }
        case(AuthActions.LOGOUT):
            return {
                ...state,
                isAuthenticated: false
            }    
        default:
                return state;
    }
    

}