import { Component, OnInit } from '@angular/core';
import * as MatchActions from '../match-store/match.actions'
import * as fromMatch from '../match-store/match.reducers'
import * as fromApp from '../../../app.reducers'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Match } from '../../models/match.model';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-match-prediction-list',
  templateUrl: './match-prediction-list.component.html',
  styleUrls: ['./match-prediction-list.component.css']
})
export class MatchPredictionListComponent implements OnInit {
  
  matchState: Observable<any>
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    
      let todaysDate = new Date().getTime()
      let tomorrow = new Date() 
      tomorrow.setDate(new Date().getDate() + 1)
      let tomorrowsDate = tomorrow.getTime()

    this.matchState = this.store.select('matches')
    .pipe(map((state:any) => {
      console.log(state)
      return state.matches 
    })).pipe(map((matches: Match[]) => {
      console.log(matches)
      let resMatches = []
      if(matches) {
        for (let match of matches) {
          let utcDate = new Date(match.utcDate)
  
          let matchDate = utcDate.getTime()
      
          if (matchDate >= todaysDate && matchDate <= tomorrowsDate) {
            resMatches.push(match)
          }
        }
        console.log(resMatches)
        return resMatches
      }
      else {
        return resMatches
      }
      
    }))
          
        
   
  }

}
