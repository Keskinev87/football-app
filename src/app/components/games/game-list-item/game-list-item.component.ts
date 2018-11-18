import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../models/game.model'
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducers'
import * as GameActions from '../games-store/games.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {
  @Input() game: Game

  constructor(private store: Store<fromApp.AppState>, private router: Router ) { }


  ngOnInit() {
  }

  onChooseCompetitions() {
    this.store.dispatch(new GameActions.BeginEditGame(this.game))
    this.router.navigate(['/games/create/competitions'])
    console.log("Choose competitions")
  }

  onAddMatches() {
    console.log("Add matches")
  }
}
