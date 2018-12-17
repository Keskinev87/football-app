import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as PredictionsActions from './predictions.actions'
import { environment } from '../../../../environments/environment'
import { map, switchMap, catchError } from 'rxjs/operators'
import { of } from "rxjs";
import { Prediction } from "../../models/prediction.model";

@Injectable()
export class PredictionsEffects {

    @Effect()
    savePrediction =  this.actions$
        .ofType(PredictionsActions.TRY_SAVE_PREDICTION)
        .pipe(map((action: PredictionsActions.TrySavePrediction) => {
            return action.payload
        }))
        .pipe(switchMap((prediction: Prediction) => {
            return this.httpClient.post(environment.apiUrl + '/predictions/makeMatchPrediction', prediction, {observe: 'body'})
                .pipe(map((resPrediction: Prediction) => {
                    return {
                        type: PredictionsActions.SAVE_PREDICTION_SUCCESS,
                        payload: resPrediction
                    }
                }), catchError((error) => {
                    return of(new PredictionsActions.SavePredictionFailed())
                }))
        }))

    @Effect()
    getPredictions = this.actions$
        .ofType(PredictionsActions.TRY_GET_MY_PREDICTIONS)
        .pipe(switchMap(() => {
            console.log("Predicitons Actions")
            return this.httpClient.get(environment.apiUrl + "/predictions/getMatchPredictionsForUser", {observe: 'body'}).pipe(map((predictions: Prediction[]) => {
                console.time('To hashtable begin')
                let myPredictions = {}
                for (let prediction of predictions) {
                    myPredictions[prediction.matchId] = prediction;
                }
                console.timeEnd('To hashtable begin')
                return {
                    type: PredictionsActions.GET_MY_PREDICTIONS_SUCCESS,
                    payload: myPredictions
                }
            }), catchError(error => {
                return of(new PredictionsActions.GetMyPredictionsFail())
            }))
        }))

    @Effect()
    editPrediction = this.actions$
        .ofType(PredictionsActions.TRY_EDIT_PREDICTION)
        .pipe(map((action:PredictionsActions.TryEditPrediction) => {
            return action.payload
        }))
        .pipe(switchMap((prediction: Prediction) => {
            return this.httpClient.post(environment.apiUrl + '/predictions/editMatchPrediction', prediction, {observe: 'body'})
                .pipe(map((prediction: Prediction) => {
                    return {
                        type: PredictionsActions.EDIT_PREDICTION_SUCCESS,
                        payload: prediction
                    }
                }), catchError(error => {
                    return of(new PredictionsActions.EditPredictionFail())
                }))
        }))
    



    constructor(private httpClient: HttpClient, private router: Router, private actions$: Actions) {}
}