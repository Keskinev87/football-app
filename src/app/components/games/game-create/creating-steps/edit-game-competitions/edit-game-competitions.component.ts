import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-game-competitions',
  templateUrl: './edit-game-competitions.component.html',
  styleUrls: ['./edit-game-competitions.component.css']
})
export class EditGameCompetitionsComponent implements OnInit {

  competitionState: Observable<any>

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.competitionState = this.store.select('competitions')
  }

}
