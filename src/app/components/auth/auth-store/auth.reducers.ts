import * as AuthActions from './auth.actions'



export interface State {
    token: string,
    isAuthenticated: boolean,
    error: boolean,
    errorMsg: string,
    success: boolean,
    successMsg: string
}

const initialState = {
    token: '',
    isAuthenticated: false,
    error: false,
    errorMsg:'',
    success: false,
    successMsg:''
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    
    switch (action.type) {
        case(AuthActions.SIGNUP):
            return {
                ...state,
                isAuthenticated: true,
                error: false,
                errorMsg: '',
                success: true,
                successMsg: "Registration Successfull!"
            }
        case(AuthActions.SIGNUP_FAILED):
            return {
                ...state,
                error: true,
                errorMsg: action.payload
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
        case(AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            }    
        default:
                return state;
    }
    

}