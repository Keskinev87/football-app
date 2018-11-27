import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../../../models/match.model'
import { Game } from 'src/app/components/models/game.model';
import { Prediction } from 'src/app/components/models/prediction.model';
import { Store, State } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import * as MatchActions from '../../../match-store/match.actions'
import { Observable } from 'rxjs';
import { map, take, switchMap, filter } from 'rxjs/operators';
import { User } from 'src/app/components/models/user.model';


@Component({
  selector: 'app-match-prediction-item',
  templateUrl: './match-prediction-item.component.html',
  styleUrls: ['./match-prediction-item.component.css']
})
export class MatchPredictionItemComponent implements OnInit {
  @Input() match: Match
  @Input() game: Game
  @Input() loggedUser: User
 
  predictionState: Observable<{
    prediction: Prediction,
    isEdit: boolean
  }>

  liveMatch : Observable<any>
  

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    let curGame = this.game
    let curMatch = this.match
    let curUser = this.loggedUser
    let now = new Date().getTime()


    //TODO: imporve the condition
    if (this.match.dateMiliseconds < now && this.match.score.winner === null && this.match.status != "CANCELED") {
      this.store.dispatch(new MatchActions.AddMatchForLiveUpdate(this.match))
    }

    this.liveMatch = this.store.select('matches')
        .pipe(map((state: any) => {
          return state.liveMatches
        }))
        .pipe(filter(liveMatch =>
          liveMatch.id == this.match.id
        ))
    

    this.predictionState = this.store.select('predictions')
      .pipe(map((state:any) => {
        return state.predictions
      }))
      .pipe(map((predictions: Prediction[]) => {
        let prediction = predictions.find(function(el) {
          return (el.gameId == curGame._id && el.matchId == curMatch.id && el.userId == curUser._id)
        })
        let isEdit = false
        if(prediction)
          isEdit = true
          console.log("isEdit: " + isEdit)
        return {prediction, isEdit}
      }))
  }

  ngOnDestroy() {
    if (this.match.status == ("SCHEDULED" || "IN_PLAY" || "PAUSED")) {
      this.store.dispatch(new MatchActions.RemoveMatchOfLiveUpdate(this.match.id))
    }
  }

}
