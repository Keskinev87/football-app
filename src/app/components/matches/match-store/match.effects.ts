import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as MatchActions from "./match.actions"
import { map, switchMap, catchError, takeUntil, take, mapTo, concatMap } from "rxjs/operators";
import { environment } from "../../../../environments/environment"
import { Match } from "../../models/match.model"
import { of, Observable } from "rxjs";
import { timer }  from "rxjs" 


@Injectable()
export class MatchEffects {

@Effect()
getMatches = this.actions$
    .ofType(MatchActions.TRY_GET_MATCHES)
    .pipe(map((action: MatchActions.TryGetMatches) => {
        return action.payload
    }))
    .pipe(switchMap((competitionIds: Array<number>) => {
        console.log("Match loader ")
        console.log(competitionIds)
        return this.httpClient.post<Match[]>(environment.apiUrl + "/matches/getByCompetitionId", competitionIds, {observe: 'body'}).pipe(map((matches: Match[]) => {
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

@Effect()
tryUpdateLiveMatch = this.actions$
    .ofType(MatchActions.TRY_UPDATE_LIVE_MATCHES)
    .pipe(map((action:MatchActions.TryUpdateLiveMatches) => {
        return action.payload
    }))
    .pipe(switchMap((liveMatches: Match[]) => {
        return this.httpClient.post<Match[]>(environment.apiUrl + "/matches/getLiveScores", liveMatches, {observe: 'body'})
            .pipe(map((liveMatches: Match[]) => {
                console.log("Response is:")
                console.log(liveMatches)
                if (liveMatches && liveMatches.length > 0) {
                    return {
                        type: MatchActions.UPDATE_LIVE_MATCHES_SUCCESS,
                        payload: liveMatches
                    }
                } else {
                    return {
                        type: MatchActions.DO_NOTHING
                    }
                }
            }), catchError(error => {
                return of(new MatchActions.UpdateLiveMatchesFail(error.status))
            }))
    }))
        


constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}

}