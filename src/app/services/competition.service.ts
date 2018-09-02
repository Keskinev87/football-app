import { Competition } from '../components/models/competition.model'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable()
export class CompetitionsService {
    
    constructor( private httpClient: HttpClient) {
        
    }

    getCompetitions() {
        let apiToken:string = 'f8a83daa19804e2a966103601127b9b5'
        return this.httpClient.get('http://api.football-data.org/v2/competitions/?plan=TIER_ONE', {
            headers: new HttpHeaders().set('X-Auth-Token', apiToken)
        })
    }
}