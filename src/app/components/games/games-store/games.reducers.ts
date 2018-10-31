import * as GameActions from './games.actions';
import { Game } from '../../models/game.model';

export interface State {
    games: (Game[] ),
    gameOptions: any,
    editedGame: Game,
    editedGameId: string,
    error: boolean,
    errorMsg: string
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
    errroMsg: ''
};


export function gamesReducer(state = initialState, action: GameActions.GameActions) {
    switch (action.type) {
        case GameActions.CREATE_GAME: 
            return {
                ...state,
                games: [...state.games, action.payload]
            };
        case GameActions.CREATE_GAME_FAILED:
            return {
                ...state,
                error: true,
                errorMsg: "Server Error"
            }
        case GameActions.ADD_COMPETITION:
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        default: 
            return state;
        }
    
}