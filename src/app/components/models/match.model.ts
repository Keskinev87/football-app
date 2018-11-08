export class Match {
	constructor(
		public id: number,
		public competition: {
			id: number;
			name: string;
		},
		public season: Object,
		public utcDate: Date,
		public status: string,
		public matchday: number,
		public stage: string,
		public group: string,
		public lastUpdated: Date,
		public homeTeam: Object,
		public awayTeam: Object,
		public score: Object,
		public referees?: Array<object>,
		public goals?: Array<object>,
		public bookings?: Array<object>,
		public substitutions?: Array<object>) {}
}