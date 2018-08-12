export default class Game {
    public id: string;
    public name: string;
    public shareableUrl: string;
    public secretCode: number;
    public leagues?: Array<object>;
    public matches?: Array<object>;
    public users?: Array<object>{
		public id: string;
		public name: string;
		public matchPredictions: Array<object> [{
			matchId: number;
			homeTeamResult: number;
			awayTeamResult: number;
			scorer: number;
		}];
		public longPredictions: Array<object> [{
			public type: string;
			public leagueId: number;
			public 
			
		}]
	};
    public description: String;
    public creator: object;
    public admin: object;
    public other?: Array<object>;
}
