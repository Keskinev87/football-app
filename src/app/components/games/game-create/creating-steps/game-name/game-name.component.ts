import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store'
import { Game } from '../../../../models/game.model'
import * as GamesActions from '../../../games-store/games.actions'
import * as fromApp from '../../../../../app.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.css']
})
export class GameNameComponent implements OnInit {

  gamesState: Observable<any>

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.gamesState = this.store.select('games')
  }


  onSubmit(form: NgForm) {
    //create game
    let game = new Game (
      form.value.name,
      form.value.type,
      form.value.description,
      form.value.secretCode
    )

    this.store.dispatch(new GamesActions.BeginCreateGame(game))
    

    // let token = this.authService.getToken()
    // if(token){
    //   this.gamesService.createNewGame(game, token).subscribe((response) => {
    //     console.log(response)
    //     this.router.navigate(['/competitions'])
    //   }, (error) =>{
    //     console.log(error)
    //   })
      
    // }
    // else {
    //   this.router.navigate(['/login'])
    // }
    
  }
}
