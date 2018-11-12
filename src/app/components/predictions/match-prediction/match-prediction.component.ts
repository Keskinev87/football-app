import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prediction } from 'src/app/components/models/prediction.model';
import * as PredictionActions from '../predictions-store/predictions.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducers';
import { Game } from '../../models/game.model';
import { Match } from '../../models/match.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-match-prediction',
  templateUrl: './match-prediction.component.html',
  styleUrls: ['./match-prediction.component.css']
})
export class MatchPredictionComponent implements OnInit {

  @Input() game: Game
  @Input() match: Match

  predictionsState: Observable<any>

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    let curGame = this.game
    let curMatch = this.match

    this.predictionsState = this.store.select('predictions')
      .pipe(map((predictions: Prediction[]) => {
        let prediction = predictions.find(function(el) {
          return (el.gameId == curGame._id && el.matchId == curMatch.id)
        })
        return prediction
      }))
  }

  onPredict(form: NgForm) {
    console.log("Predict")
    let prediction: Prediction = new Prediction(this.match.id, form.value.homeTeam, form.value.awayTeam, this.game._id)
    this.store.dispatch(new PredictionActions.TrySavePrediction(prediction))
  }


}
