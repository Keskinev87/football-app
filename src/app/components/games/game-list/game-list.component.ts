import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../../app.reducers'
import * as GamesActions from '../games-store/games.actions'
import { ErrorMsgService } from 'src/app/services/errorMsg.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  
  gamesState: Observable<any>
  userState: Observable<any>

  constructor(private store: Store<fromApp.AppState>, public errMsgService: ErrorMsgService, private router: Router, private modalService: ModalService) {}

  ngOnInit() {
    this.gamesState = this.store.select('games')
    this.userState = this.store.select('users')
  }

  onCreateNewGame() {
    this.router.navigate(['/games/create/choose-name'])
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.store.dispatch(new GamesActions.ResetEditState())
    this.modalService.close(id);
  }


}

