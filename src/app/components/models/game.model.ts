export class Game {

    constructor(
    public id: string,
    public name: string,
    public shareableUrl: string,
    public secretCode: number,
    public leagues: Array<object>,
    public matches: Array<object>,
    public users: [{
		id: string,
	    name: string,
		matchPredictions: Array<object>,
											// [{
											// 	matchId: number,
											// 	homeTeamResult: number,
											// 	awayTeamResult: number,
											// 	scorer: number
											// }]
											
		longPredictions: Array<object>, 					
											// [{
											// 	type: string,
											// 	competitionId: number,
											//     competitionWinner: number
											// 	}]
	}],
    public creator: object,
    public description: String,
    public admin: object,
    public other?: Array<object>
    ) {}

}