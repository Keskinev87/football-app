import { Subject } from "rxjs";
import { Match } from '../components/models/match.model'

export class MatchesService {
    matches = [ new Match (
    238916, 
    {
        id: 2001,
        name: "Chamions League"
    },
    {
        id: 175,
        startDate: new Date("2018-06-26"),
        endDate: new Date("2018-08-28"),
        currentMatchday: null,
        availableStages:[]
    },
    new Date("2018-06-26T15:00:00Z"),
    "FINISHED",
    null,
    "PRELIMINARY_SEMI_FINALS",
    "Preliminary Semi-finals",
    new Date("2018-07-12T11:09:55Z"),
    {
        id: 1879,
        name: "FC Santa Coloma"
    },
    {
        id: 7282,
        name: "Drita KF Gjilan"
    },
    {
        winner: "AWAY_TEAM",
        duration: "EXTRA_TIME",
        fullTime: {
            homeTeam: 0,
            awayTeam: 2
        },
        halfTime: {
            homeTeam: 0,
            awayTeam: 0
        },
        extraTime: {
            homeTeam: 0,
            awayTeam: 2
        },
        penalties: {
            homeTeam: null,
            awayTeam: null
        }
    },
    [])
    ];

    getMatches() {
        return this.matches.slice()
    }

}