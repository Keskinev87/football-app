export class Match {
	constructor(public id: number,public competition: {id: number;name: string;},
		public season: {
			id: number;
			startDate: Date;
			endDate: Date;
			currentMatchday: number;
			availableStages?: Array<string>;
		},
		public utcDate: Date,
		public status: string,
		public matchday: number,
		public stage: string,
		public group: string,
		public lastUpdated: Date,
		public homeTeam: {
			id: number;
			name: string;
		},
		public awayTeam: {
			id: number;
			name: string;
		},
		public score: {
			winner: string,
			duration: string,
			fullTime: {
				homeTeam: number;
				awayTeam: number;
			},
			halfTime: {
				homeTeam: number;
				awayTeam: number;
			},
			extraTime: {
				homeTeam: number;
				awayTeam: number;
			},
			penalties: {
				homeTeam: number;
				awayTeam: number;
			}
		},
		public referees?: Array<object>,
		public goals?: Array<object>,
		public bookings?: Array<object>,
		public substitutions?: Array<object>) {}
}