import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as PredictionsActions from './predictions.actions'
import { environment } from '../../../../environments/environment'
import { map, switchMap, catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable()
export class PredictionsEffects {

    @Effect()
    savePrediction =  this.actions$
    .ofType(PredictionsActions.TRY_SAVE_PREDICTION)
    



    constructor(private http: HttpClient, private router: Router, private actions$: Actions) {}
}