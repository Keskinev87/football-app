import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
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
export class MatchPredictionComponent implements OnInit, OnChanges {

  @Input() match: Match
  @Input() game: Game
  @Input() prediction: Prediction
  @Input() error: boolean
  loading: Observable<boolean>

  editedPrediction: Prediction
  

  
 

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    console.log("Prediction initialized") 
  }

  ngOnChanges(change: any) {
    if(change.prediction.currentValue != undefined) {
      this.editedPrediction = Object.assign(this.prediction)
    }
  }

  onPredict(form: NgForm) {
    console.log("Predict")
    let newPrediction: Prediction = new Prediction(this.match.id, form.value.homeTeamScore, form.value.awayTeamScore, this.game._id, this.game.scoreRules)
    this.store.dispatch(new PredictionActions.TrySavePrediction(newPrediction))
  }

  onEdit(form: NgForm) {
    console.log(this.editedPrediction)
    this.store.dispatch(new PredictionActions.TryEditPrediction(this.editedPrediction))
    
  }


}
