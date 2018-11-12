import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../../../models/match.model'
import { Game } from 'src/app/components/models/game.model';


@Component({
  selector: 'app-match-prediction-item',
  templateUrl: './match-prediction-item.component.html',
  styleUrls: ['./match-prediction-item.component.css']
})
export class MatchPredictionItemComponent implements OnInit {
  @Input() match: Match
  @Input() game: Game

  constructor() { }

  ngOnInit() {
  }

}
