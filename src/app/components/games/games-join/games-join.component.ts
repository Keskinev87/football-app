import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducers'
import * as GameActions from '../games-store/games.actions'
import { NgForm } from '@angular/forms';
import { ErrorMsgService } from 'src/app/services/errorMsg.service';

@Component({
  selector: 'app-games-join',
  templateUrl: './games-join.component.html',
  styleUrls: ['./games-join.component.css']
})
export class GamesJoinComponent implements OnInit {

  gamesState: Observable<{
    error: boolean,
    errorCode: number,
    loading: boolean
  }>

  constructor(private store: Store<fromApp.AppState>, public errorMsg: ErrorMsgService) {}

  ngOnInit() {
    this.gamesState = this.store.select('games')
  }

  onCodeEnter(form: NgForm) {
    let code = new Object({gameCode: form.value.gameCode})
    this.store.dispatch(new GameActions.TryJoinGameByCode(code))
  }

}
