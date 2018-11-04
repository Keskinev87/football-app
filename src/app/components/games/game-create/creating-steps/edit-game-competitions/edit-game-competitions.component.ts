import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import * as fromGames from '../../../games-store/games.reducers'
import { Observable } from 'rxjs';
import * as GamesActions from '../../../games-store/games.actions'
import { Game } from '../../../../models/game.model'
import { map, catchError, switchMap, take} from 'rxjs/operators';

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

    // return this.store.select('auth')
    // .pipe(take(1))
    // .pipe(switchMap((authState: fromAuth.State) => {
    //     const reqCopy = req.clone({ headers: new HttpHeaders().append("Authorization", "JWT " + authState.token)})
    //     console.log(authState.token)
    //     return next.handle(reqCopy)
    // }))
    this.gamesState.pipe(take(1)).subscribe((state) => {
      console.log(state.editedGame)
      this.store.dispatch(new GamesActions.UpdateGame(state.editedGame))
    })

    // this.store.select('games')
    //   .pipe(take(1))
    //   .pipe(map((gamesState: fromGames.State ) => {
    //     console.log(gamesState.editedGame)
    //     return this.store.dispatch(new GamesActions.UpdateGame(gamesState.editedGame))
    //   }))
    //TODO: catchError here
    
    // this.store.select('games').pipe(map((res: {games: Game[],
    //   gameOptions: any,
    //   editedGame: Game,
    //   editedGameId: string,
    //   error: boolean,
    //   errorMsg: string,
    //   loading: boolean
    // }) => {
    //   return res.editedGame
    // })).pipe(map((editedGame) => {
    //   console.log(editedGame)
    //   this.store.dispatch(new GamesActions.UpdateGame(editedGame))
    // }))
  }
}
