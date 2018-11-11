import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/components/models/match.model';
import * as fromApp from '../../../../app.reducers'
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/components/models/game.model';

@Component({
  selector: 'app-match-prediction-game',
  templateUrl: './match-prediction-game.component.html',
  styleUrls: ['./match-prediction-game.component.css']
})
export class MatchPredictionGameComponent implements OnInit {

  //2. We received the games from the "match-prediction-list" component. Now we will filter the matches for each game. Also we will apply the date filters.
  @Input() game: Game
  matchState: Observable<any>

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    //declare the date filters
    let todaysDate = new Date().getTime()
    let tomorrow = new Date() 
    tomorrow.setDate(new Date().getDate() + 10)
    console.log(tomorrow)
    let tomorrowsDate = tomorrow.getTime()
    //extract the competition ids from the game.We will filter the matches by those too. 
    let competitionIds = this.game.competitions

    //get the matches form the state and filter them
    this.matchState = this.store.select('matches')
    .pipe(map((state:any) => {
      
      return state.matches 
    })).pipe(map((matches: Match[]) => {
      
      let resMatches = []
      if(matches) {
        for (let match of matches) {
          let utcDate = new Date(match.utcDate)
          let matchDate = utcDate.getTime()
      
          if (matchDate >= todaysDate && matchDate <= tomorrowsDate && competitionIds.includes(match.competition.id)) {
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
