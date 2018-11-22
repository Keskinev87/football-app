import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as MatchActions from "./match.actions"
import { map, switchMap, catchError, takeUntil, take, mapTo } from "rxjs/operators";
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
updateLiveMatch = this.actions$
    .ofType(MatchActions.SCHEDULE_UPDATE_LIVE_SCORE)
    .pipe(switchMap((action: MatchActions.ScheduleUpdateLiveScore) => {
        return timer(action.payload.miliseconds, 5000).pipe(takeUntil(this.actions$.ofType(MatchActions.STOP_LIVE_UPDATE))).pipe(map(() => {
            console.log(action.payload.matchId)
            return {
                type: MatchActions.DO_NOTHING
            }
        }))
        
        
    }))
        


constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}

}