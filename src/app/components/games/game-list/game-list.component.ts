import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../../app.reducers'
import * as GamesActions from '../games-store/games.actions'
import { ErrorMsgService } from 'src/app/services/errorMsg.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  
  gamesState: Observable<any>

  gameJoin: boolean = false

  constructor(private store: Store<fromApp.AppState>, public errMsgService: ErrorMsgService) {}

  ngOnInit() {
    this.gamesState = this.store.select('games')
  }

  onJoinGame() {
    this.gameJoin = true
  }

  onCreateNewGame() {
    console.log(this.errMsgService.getErrMsg(401, 'games'))
  }


}

