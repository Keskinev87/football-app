import { Component, OnInit, Input } from '@angular/core';
import Match from '../models/match.model'

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

}
