import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../../../models/match.model'
import { Game } from 'src/app/components/models/game.model';
import { Prediction } from 'src/app/components/models/prediction.model';
import { Store, State } from '@ngrx/store';
import * as fromApp from '../../../../../app.reducers'
import * as MatchActions from '../../../match-store/match.actions'
import { Observable } from 'rxjs';
import { map, take, switchMap, filter } from 'rxjs/operators';
import { User } from 'src/app/components/models/user.model';


@Component({
  selector: 'app-match-prediction-item',
  templateUrl: './match-prediction-item.component.html',
  styleUrls: ['./match-prediction-item.component.css']
})
export class MatchPredictionItemComponent implements OnInit {
  @Input() match: Match
  @Input() game: Game

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    // if (this.match.status == ("SCHEDULED" || "IN_PLAY" || "PAUSED")) {
    //   this.store.dispatch(new MatchActions.RemoveMatchOfLiveUpdate(this.match.id))
    // }
  }

}
