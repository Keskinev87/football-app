import { Injectable } from "../../../node_modules/@angular/core";
import { MatchesService } from "./matches.service";
import { Game } from "../components/models/game.model"

export class GamesService {

    games= [new Game('1', "Yavor's Game","www.abv.bg", 123, [], [], [{id:"1a23", name:"Yavorcho",matchPredictions: [], longPredictions: [] }],
     {id:1, name: "Yavor"},"This is a test game", {id:1, name: "YavorAdmin"},[])]

    steps: Array<string> = ['', 'choose-competitions', 'choose-matches', 'score-rules']

    newGame: Game 

     getGames() {
         return this.games.slice();
     }

     navigateForward(step:string) {
        //This navigates forward in the game creation process. It gets the index of the current step in the array with steps and redirects programatically to the next one in the array. 
        let index: number = this.steps.indexOf(step)
        return ('game-create/' + this.steps[index+1])
     }

     navigateBackwards(step:string) {
        let index: number = this.steps.indexOf(step)
        return ('game-create/' + this.steps[index-1])
     }
}