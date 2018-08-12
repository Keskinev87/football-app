import { Injectable } from "../../../node_modules/@angular/core";
import { MatchesService } from "./matches.service";
import { Game } from "../components/models/game.model"

export class GamesService {

    games= [new Game('1', "Yavor's Game","www.abv.bg", 123, [], [], [{id:"1a23", name:"Yavorcho",matchPredictions: [], longPredictions: [] }],
     {id:1, name: "Yavor"},"This is a test game", {id:1, name: "YavorAdmin"},[])]

     getGames() {
         return this.games.slice();
     }
}