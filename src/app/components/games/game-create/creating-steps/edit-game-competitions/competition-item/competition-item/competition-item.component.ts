import { Component, OnInit, Input } from '@angular/core';
import { Competition } from 'src/app/components/models/competition.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../../../app.reducers'
import * as GamesActions from '../../../../../games-store/games.actions'

@Component({
  selector: 'app-competition-item',
  templateUrl: './competition-item.component.html',
  styleUrls: ['./competition-item.component.css']
})
export class CompetitionItemComponent implements OnInit {

  //view State
  @Input() competition: Competition
  selected: boolean = false // this is bound to style properties of the component
  

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    
  }

  onAddCompetition() {
    console.log(this.competition.id)
    this.store.dispatch(new GamesActions.AddCompetition(this.competition.id))
    this.selected = true
  }

  onRemoveCompetition() {
    console.log("Remove competition")
    this.store.dispatch(new GamesActions.RemoveCompetition(this.competition.id))
    this.selected = false
  }

}
