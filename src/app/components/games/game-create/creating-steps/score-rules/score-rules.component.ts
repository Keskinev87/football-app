import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/components/models/game.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-score-rules',
  templateUrl: './score-rules.component.html',
  styleUrls: ['./score-rules.component.css']
})
export class ScoreRulesComponent implements OnInit {
  gamesState: Observable<{games: Game[],
    gameOptions: any,
    editedGame: Game,
    editedGameId: string,
    error: boolean,
    errorCode: number,
    loading: boolean
  }>

  rules: Object = {
    exactMatch: null,
    goalDiff: null,
    oneGoalDiff: null,
    guessedWinner: null,
    zeroZero: null,
    finalWinner: '',
  }

  shortTermTab: boolean = true

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.gamesState = this.store.select('games')
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

  onChangeTab() {
    this.shortTermTab = !this.shortTermTab
  }

}
