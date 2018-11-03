import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import { Observable } from 'rxjs';
import * as GamesActions from '../../../games-store/games.actions'
import { Game } from '../../../../models/game.model'
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-edit-game-competitions',
  templateUrl: './edit-game-competitions.component.html',
  styleUrls: ['./edit-game-competitions.component.css']
})
export class EditGameCompetitionsComponent implements OnInit, OnDestroy {

  competitionState: Observable<any>

  gamesState: Observable<{games: Game[],
    gameOptions: any,
    editedGame: Game,
    editedGameId: string,
    error: boolean,
    errorMsg: string,
    loading: boolean
  }>

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.competitionState = this.store.select('competitions')
    this.gamesState = this.store.select('games')
  }

  ngOnDestroy() {
    this.store.dispatch(new GamesActions.ResetState())
  }

  onSave() {
    //TODO: catchError here
    
    this.competitionState.pipe(map((editedGame: Game) => {
      this.store.dispatch(new GamesActions.UpdateGame(editedGame))
    }))
  }
}
