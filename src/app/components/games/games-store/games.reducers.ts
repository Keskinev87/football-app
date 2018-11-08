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
                editedGame: action.payload
            }
        case GameActions.UPDATE_GAME_COMPETITIONS:
            return {
                ...state,
                loading: true
            }
        case GameActions.ADD_COMPETITION:
            const game = state.editedGame
            game.competitions.push(action.payload)
            var games = [...state.games]
            games[state.editedGame._id] = game
            return {
                ...state,
                games: games
            }
        case GameActions.REMOVE_COMPETITION:
            const reqGame = state.editedGame
            const index = reqGame.competitions.indexOf(action.payload)
            reqGame.competitions.splice(index, 1)
            console.log(reqGame)
            var games = [...state.games]
            games[state.editedGame._id] = reqGame
            console.log(games)
            return {
                ...state,
                games: games
            }
        case GameActions.FINISH_EDIT:
            return {
                ...state,
                editedGame: undefined,
                editedGameId: '',
                error: false,
                errorMsg: '',
                loading: false
            }
        case GameActions.RESET_STATE:
            return {
                games: undefined,
                gameOptions: [{
                    option: 'Standard',
                    description: 'Description 1'
                }],
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