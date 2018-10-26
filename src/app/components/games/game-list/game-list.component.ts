import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs';
import * as fromApp from "../../../app.reducers"

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  
  gamesState: Observable<{games: Game[]}>

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.gamesState = this.store.select('games')
  }

  onChooseCompetitions() {

  }

  onAddMatches() {
    
  }

}

