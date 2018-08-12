import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../../services/games.service'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games = []

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getGames()
  }

}

