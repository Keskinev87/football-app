import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './app.reducers'
import * as AuthActions from './components/auth/auth-store/auth.actions'
import * as GamesActions from './components/games/games-store/games.actions'
import * as CompetitionsActions from './components/competitions/competitions-store/competitions.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.CheckStatus())
    this.store.dispatch(new GamesActions.TryGetAllGamesByUserId())
    this.store.dispatch(new CompetitionsActions.TryGetCompetitions())
  }

}

