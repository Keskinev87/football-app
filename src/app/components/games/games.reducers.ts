import * as GameActions from './games.actions';
import { Game } from "../models/game.model";

const initialState = {
    games: [{
        _id:"5bc4a2f2ad83f21858e732a2",
        competitions:[],
        matches:[],
        users:[],
        name:"Test 199",
        type:"Standard",
        secretCode:8899,
        description:"TEst",
        creator:"5bbd07e68cb64b1534358a77",
        admin:"5bbd07e68cb64b1534358a77"
        }]
};


export function gamesReducer(state = initialState, action: GameActions.GameActions) {
    switch (action.type) {
        case  (GameActions.ADD_GAME): 
            return {
                ...state,
                games: [...state.games, action.payload]
            };
            default: 
                return state;
        }
    
}