import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/components/models/match.model';
import { Observable, Subscription } from 'rxjs';
import * as fromApp from '../../../../app.reducers'
import * as  MatchActions from '../../match-store/match.actions'
import { Store } from '@ngrx/store';
import { map, take, switchMap, mergeMap, concatMap } from 'rxjs/operators';




@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {

  @Input() match: Match
  
  liveMatch: Observable<Match>
   

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    console.log("Live score initialized")
      this.liveMatch = this.store.select('matches')
        .pipe(map((state: any) => {
          return state.liveMatches.find(x => x.id == this.match.id)
        }))
        
       
  
    // console.log("Live Score initialized")
    // console.log(this.liveMatch)
    // console.log(this.liveMatch.score.fullTime.homeTeam)
    //check how much time is left untill the match begins
  }

 


}
