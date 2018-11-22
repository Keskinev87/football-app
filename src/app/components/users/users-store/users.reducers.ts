import * as UsersActions from './users.actions'
import { User } from '../../models/user.model'


export interface State {
    loggedUser: User,
    gameUsers: User[],
    error: boolean,
    loading: boolean
}

const initialState = {
    loggedUser: undefined,
    gameUsers: [],
    error: false,
    loading: false
};

export function matchReducer(state = initialState, action: UsersActions.UsersActions): State {
    switch (action.type) {
        case UsersActions.TRY_GET_USER:
            return {
                ...state,
                loading: true
            }
        case UsersActions.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedUser: action.payload
            }
        case UsersActions.GET_USER_FAILED:
            return {
                ...state,
                loading: false
            }


        }
}