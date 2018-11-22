import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/components/models/match.model';



@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {

  @Input() match: Match
  constructor() { }

  ngOnInit() {
  }

}
