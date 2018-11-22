import { Component, OnInit } from '@angular/core';
import * as MatchActions from '../match-store/match.actions'
import * as fromMatch from '../match-store/match.reducers'
import * as fromApp from '../../../app.reducers'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Match } from '../../models/match.model';
import { map, filter, switchMap } from 'rxjs/operators';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-match-prediction-list',
  templateUrl: './match-prediction-list.component.html',
  styleUrls: ['./match-prediction-list.component.css']
})
export class MatchPredictionListComponent implements OnInit {
  
  gamesState: Observable<{
    games: Game[]
  }>
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //This component loads the pending matches. Pending matches are matches, that: 
    //a. Belong to a competition from a game, that the user participates in
    //b. Are today or tomorrow
    //c. Are not with status "FINISHED"

    //1. Declare the date filters
      

    //1. Get the games of the user 

      this.gamesState = this.store.select('games')
      this.store.dispatch(new MatchActions.ScheduleUpdateLiveScore({miliseconds:0, matchId: 1010}))
      setTimeout(() => {
        this.store.dispatch(new MatchActions.ScheduleUpdateLiveScore({miliseconds:0, matchId: 2010}))
      },6000)

      setTimeout(() => {
        this.store.dispatch(new MatchActions.StopLiveUpdate())
      },20000)
       
    // The games will be passed to "match-prediciton-game" component. From there, we will get the pending matches for each game
    
          
        
   
  }

}
