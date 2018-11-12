import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prediction } from 'src/app/components/models/prediction.model';
import * as PredictionActions from '../predictions-store/predictions.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducers';
import { Game } from '../../models/game.model';
import { Match } from '../../models/match.model';
import { Observable } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-match-prediction',
  templateUrl: './match-prediction.component.html',
  styleUrls: ['./match-prediction.component.css']
})
export class MatchPredictionComponent implements OnInit {

  @Input() game: Game
  @Input() match: Match
  @Input() isEdit: boolean
  @Input() prediction: Prediction

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

  }

  onPredict(form: NgForm) {
    console.log("Predict")
    let newPrediction: Prediction = new Prediction(this.match.id, form.value.homeTeam, form.value.awayTeam, this.game._id)
    this.store.dispatch(new PredictionActions.TrySavePrediction(newPrediction))
  }

  onEdit(form: NgForm) {
    this.store.dispatch(new PredictionActions.TryEditPrediction(this.prediction))
    console.log(this.prediction)
  }


}
