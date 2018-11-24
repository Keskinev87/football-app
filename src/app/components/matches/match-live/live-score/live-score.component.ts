import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/components/models/match.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../../../app.reducers'
import * as  MatchActions from '../../match-store/match.actions'
import { Store } from '@ngrx/store';




@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {

  @Input() liveMatch: Match

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    
  
    console.log("Live Score initialized")
    console.log(this.liveMatch)
    console.log(this.liveMatch.score.fullTime.homeTeam)
    //check how much time is left untill the match begins
    let now = new Date().getTime()
    console.log("Now " + now)
    //check if match has finished
  
  }


}
