export default class Match {
    public id: number;
    public leagueId: object;
    public leagueName: string;
    public season: object {
		id: number;
		startDate: Date;
		endDate: Date;
		currentMatchday: number;
		availableStages: Array<string>;
	};
    public dateStart: Date;
    public dateEnd: Date;
	status: string;
	minute: number;
	attendance?: number;
	matchday?: number;
	stage: string;
	group?: string;
	lastUpdated: Date;
	referees: Array<object> [{
		id: number;
		name: string;
		nationality?: string;
	}];
    public homeTeam: object {
		id: number;
		name: string;
		coach: object {
			id:number;
			name: string;
			countryOfBirth: string;
			nationality: string;
		};
		captain: object {
			id: number;
			name: string;
			shirtNumber: number;
		};
		lineup: Array<object> [{
				id:number;
				name: string;
				position: string;
				shirtNumber: number;
			};
		];
		bench: Array<object> [{
			id:number;
			name: string;
			position: string;
			shirtNumber: number;
		}];
	};
    public awayTeam: object {
		id: number;
		name: string;
		coach: object {
			id:number;
			name: string;
			countryOfBirth: string;
			nationality: string;
		};
		captain: object {
			id: number;
			name: string;
			shirtNumber: number;
		};
		lineup: Array<object> [{
				id:number;
				name: string;
				position: string;
				shirtNumber: number;
			};
		];
		bench: Array<object> [{
			id:number;
			name: string;
			position: string;
			shirtNumber: number;
		}];
	};
    public score: Array<object>;
	public goals: Array<object>;
	public bookings: Array<object>;
	public substitutions: Array<object>;
}

