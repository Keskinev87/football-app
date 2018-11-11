import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../../models/match.model'
import { NgForm } from '@angular/forms';
import { Game } from 'src/app/components/models/game.model';
import Prediction from 'src/app/components/models/prediction.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../app.reducers'


@Component({
  selector: 'app-match-prediction-item',
  templateUrl: './match-prediction-item.component.html',
  styleUrls: ['./match-prediction-item.component.css']
})
export class MatchPredictionItemComponent implements OnInit {
  @Input() match: Match
  @Input() game: Game

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    console.log("inited")
    console.log(this.game)
  }

  onPredict(form: NgForm) {
    console.log("Predict")
    let prediction: Prediction = new Prediction(this.match.id, form.value.homeTeam, form.value.awayTeam, this.game._id)
    this.store.dispatch
  }

}
