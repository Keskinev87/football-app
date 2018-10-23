import { Game } from "../components/models/game.model"
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()

export class GamesService {
    games: Array<Game>

    constructor(private httpClient: HttpClient) {}

    getGames() {
        
    }

    createNewGame(game: Object, token: string) {
            return this.httpClient.post('http://localhost:3000/game/create',
                game,
                {observe:'body'})
         //TODO: Http request to server to save the game. 
    }
}