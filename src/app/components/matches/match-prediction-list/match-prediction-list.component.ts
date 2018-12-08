import { Component, OnInit, OnDestroy } from '@angular/core';
import * as MatchActions from '../match-store/match.actions'
import * as fromMatch from '../match-store/match.reducers'
import * as fromApp from '../../../app.reducers'
import { Store, State } from '@ngrx/store';
import { Observable, Subscription, Subscriber } from 'rxjs';
import { Match } from '../../models/match.model';
import { map, filter, switchMap, take, concatMap } from 'rxjs/operators';
import { Game } from '../../models/game.model';
import { User } from '../../models/user.model';
import { timer } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-prediction-list',
  templateUrl: './match-prediction-list.component.html',
  styleUrls: ['./match-prediction-list.component.css']
})
export class MatchPredictionListComponent implements OnInit, OnDestroy {
  
  gamesState: Observable<{
    games: Game[]
  }>
  liveMatchesState: Observable<any>
  scheduler: Observable<number>
  updater: Subscription
  
  constructor(private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit() {
    //get all games for this user and create a list with the matches that are pending for these games
    this.gamesState = this.store.select('games')
    

    //1. Check every X seconds if there are matches to be updated. 2. Try to update them by dispatching the action.
    this.scheduler = timer(0, 10000)
    
    this.updater = this.scheduler
      .pipe(map(() => {
        console.log("Update Matches")
              this.store.dispatch(new MatchActions.TryUpdateLiveMatches())
      }))
      .subscribe()     
  }

  ngOnDestroy() {
    this.updater.unsubscribe()
  }

  onGamesRedirect() {
    this.router.navigate(['/games'])
  }

     
    

}
