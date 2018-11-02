import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as CompetitionsActions from "../competitions-store/competitions.actions"
import { environment } from '../../../../environments/environment'
import { map, switchMap, catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable()
export class CompetitionsEffects {

    @Effect()
    getCompetitions =  this.actions$
    .ofType(CompetitionsActions.TRY_GET_COMPETITIONS)
    .pipe(switchMap(() => {
        return this.http.get(environment.apiUrl + '/competitions/getAll', {observe: 'body'}).pipe(map((competitions) => {
            console.log(competitions)
            return {
                type: CompetitionsActions.SET_COMPETITIONS,
                payload: competitions
            }
        }), catchError(() => {
            return of(new CompetitionsActions.GetCompetitionsFailed())
        }))
    }))



    constructor(private http: HttpClient, private router: Router, private actions$: Actions) {}
}