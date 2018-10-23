import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../../services/games.service'
import { Store } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gamesState: Observable<{games: Game[]}>

  constructor(private store: Store<{gamesStore: {games: Game[]}}>) {}

  ngOnInit() {
    this.gamesState = this.store.select('gamesStore')
  }

  onChooseCompetitions() {

  }

  onAddMatches() {
    
  }

}

