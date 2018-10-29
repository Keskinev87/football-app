import * as AuthActions from './auth.actions'



export interface State {
    token: string,
    isAuthenticated: boolean,
    error: boolean,
    errorMsg: string,
    success: boolean
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
        case(AuthActions.SIGNIN):
            return {
                ...state,
                isAuthenticated: true,
                error: false,
                errorMsg: '',
                success: true,
            }
        case (AuthActions.SIGNIN_FAILED):
            return {
                ...state,
                isAuthenticated: false,
                error: true,
                errorMsg: action.payload
            }
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
        case(AuthActions.LOGOUT):
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                token: ''
            }
        case(AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            }
        case(AuthActions.CHECK_STATUS):
            return {
                ...state
            }
        case(AuthActions.DO_NOTHING):
            return {
                ...state
            }
        default:
                return state;
    }
    

}