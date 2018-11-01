import * as AuthActions from './auth.actions'



export interface State {
    token: string,
    isAuthenticated: boolean,
    error: boolean,
    errorMsg: string,
    success: boolean,
    loading: boolean
}

const initialState = {
    token: '',
    isAuthenticated: false,
    error: false,
    errorMsg:'',
    success: false,
    loading: false
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    
    switch (action.type) {
        case(AuthActions.TRY_SIGNIN):
            return {
                ...state,
                loading: true,
                error:false,
                errorMsg:''
            }
        case(AuthActions.SIGNIN):
            return {
                ...state,
                isAuthenticated: true,
                error: false,
                errorMsg: '',
                success: true,
                loading: false
            }
        case (AuthActions.SIGNIN_FAILED):
            return {
                ...state,
                isAuthenticated: false,
                error: true,
                errorMsg: action.payload,
                loading: false
            }
        case (AuthActions.TRY_SIGNUP):
            return {
                ...state,
                loading: true,
                error:false,
                errorMsg:''
            }
        case(AuthActions.SIGNUP):
            return {
                ...state,
                error: false,
                errorMsg: '',
                success: true,
                loading: false
            }
        case(AuthActions.SIGNUP_FAILED):
            return {
                ...state,
                error: true,
                errorMsg: action.payload,
                loading: false
            }
        case(AuthActions.LOGOUT):
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
        case(AuthActions.RESET_STATE):
            return {
                ...state,
                error: false,
                errorMsg:'',
                success: false,
                loading: false
            }
        default:
                return state;
    }
    

}