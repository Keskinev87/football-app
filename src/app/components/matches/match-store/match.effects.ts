import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as MatchActions from "./match.actions"
import { map, catchError } from "rxjs/operators";
import { environment } from "../../../../environments/environment"
import { Match } from "../../models/match.model"
import { of } from "rxjs";


@Injectable()
export class MatchEffects {

@Effect()
getMatches = this.actions$
    .ofType(MatchActions.TRY_GET_MATCHES)
    .pipe(map(() => {
        return this.httpClient.get(environment.apiUrl + "/matches/getByCompetitionId", {observe: 'body'}).pipe(map((matches: Match[]) => {
            console.log("Match loader ")
            console.log(matches)
            if(matches) {
                return {
                    type: MatchActions.GET_MATCHES_SUCCESS,
                    payload: matches
                }
            }
            else {
                return {
                    type: MatchActions.GET_MATCHES_FAILED
                }
            }
        }),catchError(() => {
            return of(new MatchActions.GetMatchesFailed())
        }))
    }))


constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}

}