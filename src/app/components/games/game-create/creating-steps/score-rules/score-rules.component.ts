import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/components/models/game.model';
import { Store, State } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import * as GamesActions from '../../../games-store/games.actions'
import { NgForm } from '@angular/forms';
import { ScoreRules } from '../../../../models/scoreRules.model'
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-score-rules',
  templateUrl: './score-rules.component.html',
  styleUrls: ['./score-rules.component.css']
})
export class ScoreRulesComponent implements OnInit {
  gamesState: Observable<any>

  shortTermTab: boolean = true

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.gamesState = this.store.select('games')
  }

  onSubmit(form: NgForm) {
    let rules = new ScoreRules(form.value.exactMatch, form.value.goalDiff, form.value.oneGoalDiff, form.value.guessedWinner, form.value.zeroZero, form.value.finalWinner, form.value.topScorer)
    console.log(rules)
    this.gamesState.pipe(take(1)).subscribe((state) => {
      let reqGame = state.editedGame
      reqGame.scoreRules = rules
      console.log(reqGame)
      return this.store.dispatch(new GamesActions.TrySaveGameRules(reqGame))
    })
    
  }

  onChangeTab() {
    this.shortTermTab = !this.shortTermTab
  }

}
