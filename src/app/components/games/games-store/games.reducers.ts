import * as GameActions from './games.actions';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

export interface State {
    games: Game[],
    gameOptions: any,
    editedGame: Game,
    editedGameId: string,
    error: boolean,
    errorCode: number,
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
    errorCode: null,
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
                errorCode: action.payload
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
                errorCode: action.payload,
                loading: false
            }
        case GameActions.BEGIN_EDIT_GAME:
        console.log("Game Reducer :" + action.payload)
            return {
                ...state,
                editedGame: action.payload
            }
        case GameActions.TRY_UPDATE_GAME_COMPETITIONS:
            return {
                ...state,
                loading: true
            }
        case GameActions.UPDATE_GAME_COMPETITIONS:
            
            const gameIndex = state.games.findIndex(x => x._id == action.payload._id)
            let updatedGames = state.games
            updatedGames[gameIndex] = action.payload

            return {
                ...state,
                loading: false,
                games: updatedGames,
                editedGame: action.payload
            }
        case GameActions.UPDATE_GAME_COMPETITIONS_FAILED: 
            return {
                ...state, 
                loading: false,
                error: true,
                errorCode: action.payload
            }
        case GameActions.ADD_COMPETITION:
            const game = state.editedGame 
            
            var competitionIndex = game.competitions.findIndex(x=> x == action.payload) //check if we have the competition already
           
            if(!(competitionIndex >= 0)) {
                game.competitions.push(action.payload)
            }
        
            return {
                ...state,
                editedGame: game
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
        case GameActions.BEGIN_EDIT_GAME_RULES:
            return {
                ...state,
                editedGame: action.payload
            }
        case GameActions.TRY_SAVE_GAME_RULES:
            return {
                ...state,
                loading: true
            }
        case GameActions.SAVE_GAME_RULES_SUCCESS:
            return {
                ...state,
                loading: false
                //TODO: save the rules 
            }
        case GameActions.TRY_UPDATE_GAME_RULES:
            return {
                ...state, 
                loading: true
            }
        case GameActions.UPDATE_GAME_RULES_SUCCESS: 
            return {
                ...state,
                loading: false
                //TODO: update the rules
            }
        case GameActions.SAVE_EDIT_GAME_RULES_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                errorCode: action.payload
            }
        case GameActions.RESET_EDIT_STATE:
            return {
                ...state,
                editedGame: undefined,
                editedGameId: '',
                error: false,
                errorCode: null,
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
                errorCode: null,
                loading: false
            }
        case GameActions.TRY_JOIN_GAME_BY_CODE:
            return {
                ...state,
                loading: true
            }
        case GameActions.JOIN_GAME_BY_CODE_SUCCESS:
            return {
                ...state,
                games: [...state.games, action.payload],
                loading: false
            }
        case GameActions.JOIN_GAME_BY_CODE_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: 
            return state;
        }
    
}