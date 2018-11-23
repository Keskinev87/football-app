import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/components/models/match.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../../../app.reducers'
import * as  MatchActions from '../../match-store/match.actions'
import { timer } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';




@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {

  @Input() match: Match

  matchState: Observable<any>

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.matchState = this.store.select('matches')
    
    console.log("Live Score initialized")
    console.log(this.match.score.fullTime.homeTeam)
    //check how much time is left untill the match begins
    let now = new Date().getTime()
    console.log("Now " + now)
    //check if match has finished
   
    if (this.match.status != "FINISHED") {

       //this covers the case in which the match has already begun - the number will be negative, hence the timer will start immediately
      let timeRemaining = this.match.dateMiliseconds - now
      console.log("Time remaining till match: " + timeRemaining)
    
      //declare and initialize new timer, which will execute when the match starts
      let timer$ = timer(timeRemaining,20000)
      let updateData: {
        matchId: number,
        score:object
      }
      updateData.matchId = this.match.id
      updateData.score = this.match.score
      //subscribe to the timer. 
      let subscriber = timer$.pipe(takeUntil(this.match.status == "FINISHED")).subscribe(val => {
        this.store.dispatch(new MatchActions.TryUpdateLiveMatch(updateData))
      })
    
    }
  
  }


}
