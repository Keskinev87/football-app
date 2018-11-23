import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/components/models/match.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../../../app.reducers'
import { timer } from 'rxjs'
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {

  @Input() match: Match

  liveMatchList: Observable<{
    liveMatches: Match[]
  }>

  constructor() { }

  ngOnInit() {
    console.log("Live Score initialized")
    //check how much time is left untill the match begins
    let now = new Date().getTime()
    console.log("Now " + now)

    //check if match has started AND is still running
    if(this.match.dateMiliseconds > now && this.match.status != "FINISHED"){
      let timeRemaining = this.match.dateMiliseconds - now
      console.log("Time remaining till match: " + timeRemaining)
    
      //declare and initialize new timer, which will execute when the match starts
      let timer$ = timer(timeRemaining,20000)

      //subscribe to the timer. 
      let subscriber = timer$.subscribe(val => console.log("aaa"))
    }
    


    
  }

}
