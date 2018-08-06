// import { Headers, Http } from'@angular/http';
import { Subject } from 'rxjs';

import { Match } from '../components/models/match.model'

export class MatchesService {
    matchesChanged = new Subject<Match[]>()
    
    private matches: Match[] = [
       new Match(1, 2001,'Champions league', new Date('2018-08-05'),new Date('2018-08-05'), {name:'Barcelona'},{name:'Real Madrid'}, null,
        null, null, null, 'perliminary'),
        new Match(2, 2001,'Champions league', new Date('2018-08-05'),new Date('2018-08-05'), {name:'Juventus'},{name:'PSG'}, null,
        null, null, null, 'perliminary')
         
    ]

    getMatches() {
       
        // const token = " f8a83daa19804e2a966103601127b9b5";
        // const headers = new Headers({'X-Auth-Token': token})
        // return this.http.get('http://api.football-data.org/v2/competitions/2001/matches?matchday=8')
        return this.matches.slice();

    }
    

}