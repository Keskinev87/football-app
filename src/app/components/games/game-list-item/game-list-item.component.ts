import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../models/game.model'
import { Store } from '@ngrx/store';
import * as fromApp from '../../../app.reducers'
import * as GameActions from '../games-store/games.actions'
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { ModalService } from '../../../services/modal.service'

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {
  @Input() game: Game
  @Input() user: User
  isAdmin: boolean
  requestedData: string
  

  constructor(private store: Store<fromApp.AppState>, private router: Router, private modalService: ModalService ) { }


  ngOnInit() {
    console.log(this.game.admin)
    console.log(typeof(this.game.admin))
    console.log(this.user._id)
    console.log(typeof(this.user._id))
    if (this.game.admin == this.user._id)
      this.isAdmin = true
    else
      this.isAdmin = false
  }

  onChooseCompetitions() {
    this.store.dispatch(new GameActions.BeginEditGame(this.game))
    this.router.navigate(['/games/create/competitions'])
    console.log("Choose competitions")
  }

  onAddMatches() {
    console.log("Add matches")
  }

  onOpenModal(data) {
    this.requestedData = data
    this.modalService.open("app-games-modal")
  }
}
