import { Competition } from '../components/models/competition.model'

export class CompetitionsService {
    
    competitions = [new Competition( 2001,
        {
            id: 2077,
            name: "Europe"
        },
        "UEFA Champions League",
        null,
        "TIER_ONE",
        {
            id: 175,
            startDate: new Date("2018-06-26"),
            endDate: new Date("2018-08-28"),
            currentMatchday: null
        },
        [
            {
                id: 175,
                startDate: "2018-06-26",
                endDate:"2018-08-28",
                currentMatchday: null
            },
            {
                id: 2,
                startDate:"2017-06-27",
                endDate: "2018-05-26",
                currentMatchday: 6
            }
        ],
        new Date("2018-06-05T00:06:27Z")
    )]

    getCompetitions() {
         return this.competitions.slice();
    }
}