import * as GameActions from './games.actions';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs'

export interface State {
    games: Game[],
    gameOptions: any,
    editedGame: Game,
    editedGameId: string,
    error: boolean,
    errorMsg: string,
    loading: boolean
}


const initialState: State = {
    games: undefined,
    gameOptions: [
        {
          option: 'Standard',
          description: 'Description 1'
        }
        // {
        //   option: 'Detailed',
        //   description: 'Description 2'
        // },
        // {
        //   option: 'Dynamic',
        //   description: 'Description 3'
        // }
    ],
    editedGame: undefined,
    editedGameId: '',
    error: false,
    errorMsg: '',
    loading: false
};


export function gamesReducer(state = initialState, action: GameActions.GameActions): State {
    switch (action.type) {
        case GameActions.TRY_GET_ALL_GAMES_BY_USER_ID:
            return {
                ...state,
                loading: true
            }
        case GameActions.GET_ALL_GAMES_BY_USER_ID:
            return {
                ...state,
                loading: false,
                games: action.payload
            }
        case GameActions.GET_GAMES_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: "TODO: write messages for errors in other storage"
            }
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
        case GameActions.BEGIN_EDIT_GAME:
        console.log("Game Reducer :" + action.payload)
            return {
                ...state,
                editedGameId: action.payload
            }
        case GameActions.ADD_COMPETITION:
            const game = state.games.find(x => x._id == state.editedGameId)
            game.competitions.push(action.payload)
            var games = [...state.games]
            games[state.editedGameId] = game
            return {
                ...state,
                games: games,
                editedGame: game
            }
        case GameActions.REMOVE_COMPETITION:
            const reqGame = state.games.find(x => x._id == state.editedGameId)
            const index = reqGame.competitions.indexOf(action.payload)
            reqGame.competitions.splice(index, 1)
            var games = [...state.games]
            games[state.editedGameId] = reqGame
            return {
                ...state,
                games: games,
                editedGame: game
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