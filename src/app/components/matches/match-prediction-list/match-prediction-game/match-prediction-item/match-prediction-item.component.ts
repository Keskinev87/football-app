import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../../../models/match.model'
import { Game } from 'src/app/components/models/game.model';
import { Prediction } from 'src/app/components/models/prediction.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-match-prediction-item',
  templateUrl: './match-prediction-item.component.html',
  styleUrls: ['./match-prediction-item.component.css']
})
export class MatchPredictionItemComponent implements OnInit {
  @Input() match: Match
  @Input() game: Game
  predictionState: Observable<any>

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    let curGame = this.game
    let curMatch = this.match

    this.predictionState = this.store.select('predictions')
      .pipe(map((state:any) => {
        return state.predictions
      }))
      .pipe(map((predictions: Prediction[]) => {
        let prediction = predictions.find(function(el) {
          return (el.gameId == curGame._id && el.matchId == curMatch.id)
        })
        let isEdit = false
        if(prediction)
          isEdit = true
        return {prediction, isEdit}
      }))
  }

}
