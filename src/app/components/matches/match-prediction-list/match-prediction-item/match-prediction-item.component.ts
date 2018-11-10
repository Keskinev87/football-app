import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../../models/match.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-match-prediction-item',
  templateUrl: './match-prediction-item.component.html',
  styleUrls: ['./match-prediction-item.component.css']
})
export class MatchPredictionItemComponent implements OnInit {
  @Input() match: Match

  constructor() { }

  ngOnInit() {
  }

  onPredict(form: NgForm) {
    console.log("Predict")
    console.log(form.value.homeTeam)
    console.log(form.value.awayTeam)
  }

}
