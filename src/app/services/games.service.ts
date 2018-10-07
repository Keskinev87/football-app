import { Game } from "../components/models/game.model"
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()

export class GamesService {

    games= [new Game('1', "Yavor's Game","www.abv.bg", 123, [], [],
     {id:1, name: "Yavor"},"This is a test game", {id:1, name: "YavorAdmin"},[{id:"1a23", name:"Yavorcho",matchPredictions: [], longPredictions: [] }], [])]

    private newGame= new Game('','','',null,[],[],{},'',{},[],[]) ;

     getGames() {
         return this.games.slice();
     }

     createNewGame(name:string, secretCode: number, description: string) {
         this.newGame.name = name;
         this.newGame.secretCode = secretCode;
         this.newGame.description = description
         this.games.push(this.newGame)
         console.log(this.newGame)
         //TODO: Http request to server to save the game. 
     }
}