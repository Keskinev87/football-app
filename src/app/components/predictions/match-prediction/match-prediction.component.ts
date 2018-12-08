import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prediction } from 'src/app/components/models/prediction.model';
import * as PredictionActions from '../predictions-store/predictions.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducers';
import { Game } from '../../models/game.model';
import { Match } from '../../models/match.model';
import { Observable, Subscription } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-match-prediction',
  templateUrl: './match-prediction.component.html',
  styleUrls: ['./match-prediction.component.css']
})
export class MatchPredictionComponent implements OnInit {

  @Input() match: Match
  @Input() game: Game
  
  predictions: Observable<any>
  prediction: Subscription
  editedPrediction: Prediction
  isEdit: boolean = false

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    console.log("Prediction initialized")
    this.prediction = this.store.select('predictions')
      .pipe(take(1))
      .pipe(map((state:any) => {
        console.log("State of predictions")
        console.log(state)
        return state.myPredictions
      }), map((myPredictions) => {
        let resPrediction = myPredictions.find(x => x.matchId == this.match.id)
        console.log("Prediction:")
        console.log(resPrediction)
        
        if(resPrediction) {
          this.editedPrediction = resPrediction
          this.isEdit = true
          return resPrediction
        } else 
          return undefined
      })).subscribe()
  }

  onPredict(form: NgForm) {
    console.log("Predict")
    let newPrediction: Prediction = new Prediction(this.match.id, form.value.homeTeamScore, form.value.awayTeamScore, this.game._id, this.game.scoreRules) 
    this.store.dispatch(new PredictionActions.TrySavePrediction(newPrediction))
  }

  onEdit(form: NgForm) {
    this.store.dispatch(new PredictionActions.TryEditPrediction(this.editedPrediction))
    console.log(this.editedPrediction)
  }


}
