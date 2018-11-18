import { Component, OnInit, Input } from '@angular/core';
import { Competition } from 'src/app/components/models/competition.model';
import { Store, State } from '@ngrx/store';
import * as fromApp from '../../../../../../../app.reducers'
import * as GamesActions from '../../../../../games-store/games.actions'
import { Observable } from 'rxjs';
import { Game } from 'src/app/components/models/game.model';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-competition-item',
  templateUrl: './competition-item.component.html',
  styleUrls: ['./competition-item.component.css']
})
export class CompetitionItemComponent implements OnInit {
  editedGame: Observable<{
    editedGame: Game
  }>

  //view State
  @Input() competition: Competition
  @Input() game: Game
  selected: boolean = false // this is bound to style properties of the component
  

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    let competitionIndex = this.game.competitions.findIndex(x => x == this.competition.id)
    
    if(competitionIndex >= 0){
      this.selected = true
    }
  }

  onAddCompetition() {
    console.log(this.competition.id)
    this.selected = !this.selected
    this.store.dispatch(new GamesActions.AddCompetition(this.competition.id))
  }

  onRemoveCompetition() {
    console.log("Remove competition")
    this.selected = !this.selected
    this.store.dispatch(new GamesActions.RemoveCompetition(this.competition.id))
  }

}
