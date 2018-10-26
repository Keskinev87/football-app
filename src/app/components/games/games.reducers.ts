import * as GameActions from './games.actions';
import { Game } from "../models/game.model";

export interface State {
    games: Game[],
    gameOptions: any,
    editedGame: Game,
    editedGameId: String
}

const initialState = {
    games: [ new Game("Test 199","Standard","TEst",8899,"5bc4a2f2ad83f21858e732a2",'',[],[],"5bbd07e68cb64b1534358a77","5bbd07e68cb64b1534358a77")],
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
    editedGame: null,
    editedGameId: ''
};


export function gamesReducer(state = initialState, action: GameActions.GameActions) {
    switch (action.type) {
        case GameActions.CREATE_GAME: 
            return {
                ...state,
                games: [...state.games, action.payload]
            };
        case GameActions.ADD_COMPETITION:
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        default: 
            return state;
        }
    
}