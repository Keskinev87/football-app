import * as GameActions from './games.actions';
import { Game } from '../../models/game.model';

export interface State {
    games: (Game[] ),
    gameOptions: any,
    editedGame: Game,
    editedGameId: string,
    error: boolean,
    errorMsg: string,
    loading: boolean
}


const initialState = {
    games: [],
    gameOptions: [
        {
          option: 'Standard',
          description: 'Description 1'
        },
        {
          option: 'Detailed',
          description: 'Description 2'
        },
        {
          option: 'Dynamic',
          description: 'Description 3'
        }
    ],
    editedGame: undefined,
    editedGameId: '',
    error: false,
    errorMsg: '',
    loading: false
};


export function gamesReducer(state = initialState, action: GameActions.GameActions) {
    switch (action.type) {
        case GameActions.TRY_CREATE_GAME:
            return {
                ...state,
                loading: true
            }
        case GameActions.CREATE_GAME: 
            return {
                ...state,
                games: [...state.games, action.payload],
                loading: false
            };
        case GameActions.CREATE_GAME_FAILED:
            return {
                ...state,
                error: true,
                errorMsg: "Server Error",
                loading: false
            }
        case GameActions.ADD_COMPETITION:
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        case GameActions.RESET_STATE:
            return {
                ...state,
                editedGame: undefined,
                editedGameId: '',
                error: false,
                errorMsg: '',
                loading: false
            }
        default: 
            return state;
        }
    
}