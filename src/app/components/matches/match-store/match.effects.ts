import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as MatchActions from "./match.actions"
import { map, switchMap, catchError } from "rxjs/operators";
import { environment } from "../../../../environments/environment"
import { Match } from "../../models/match.model"
import { of } from "rxjs";


@Injectable()
export class MatchEffects {

@Effect()
getMatches = this.actions$
    .ofType(MatchActions.TRY_GET_MATCHES)
    .pipe(switchMap(() => {
        console.log("Match loader ")
        return this.httpClient.get<Match[]>(environment.apiUrl + "/matches/getByCompetitionId", {observe: 'body'}).pipe(map((matches: Match[]) => {
            console.log("Match loader ")
            console.log(matches)
            if(matches) {
                console.log("success")
                return {
                    type: MatchActions.GET_MATCHES_SUCCESS,
                    payload: matches
                }
            } else {
                console.log("error1")
                return {
                    type: MatchActions.GET_MATCHES_FAILED
                }
            }
        }),catchError(error => {
            console.log("error 2")
            return of(new MatchActions.GetMatchesFailed())
        }))
    }))


constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}

}