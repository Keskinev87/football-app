import { Component, OnInit } from '@angular/core';
import * as MatchActions from '../match-store/match.actions'
import * as fromMatch from '../match-store/match.reducers'
import * as fromApp from '../../../app.reducers'
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Match } from '../../models/match.model';
import { map, filter, switchMap, take } from 'rxjs/operators';
import { Game } from '../../models/game.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-match-prediction-list',
  templateUrl: './match-prediction-list.component.html',
  styleUrls: ['./match-prediction-list.component.css']
})
export class MatchPredictionListComponent implements OnInit {
  
  gamesState: Observable<{
    games: Game[]
  }>
  liveMatchesState: Observable<any>
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
      //get all games for this user and create a list with the matches that are pending for these games
      this.gamesState = this.store.select('games')
      
      this.liveMatchesState = this.store.select('matches')
        .pipe(take(1))
        .pipe(map((state:any) => {
          return state.liveMatches
        }))
        .pipe(switchMap((liveMatches:Match[]) => {
          console.log("Prediction list checked for live matches")
          if(liveMatches && liveMatches.length > 0) {
            var timer = setInterval(() => {
              console.log("Dispatched")
              console.log(liveMatches)
              this.store.dispatch(new MatchActions.TryUpdateLiveMatches(liveMatches))
            },20000)
          } else {
            clearInterval(timer)
          }
          return liveMatches
        }))

     
      
      // this.store.dispatch(new MatchActions.ScheduleUpdateLiveScore({miliseconds:0, matchId: 1010}))
      // setTimeout(() => {
      //   this.store.dispatch(new MatchActions.ScheduleUpdateLiveScore({miliseconds:0, matchId: 2010}))
      // },6000)

      // setTimeout(() => {
      //   this.store.dispatch(new MatchActions.StopLiveUpdate())
      // },20000)
       
    // The games will be passed to "match-prediciton-game" component. From there, we will get the pending matches for each game
    
          
        
   
  }

}
