export default class Match {
    public id: number;
    public competition: {
		public id: number;
		public name: string;
	}
    public season: object {
		id: number;
		startDate: Date;
		endDate: Date;
		currentMatchday: number;
		availableStages?: Array<string>;
	};
    public utcDate: Date;
	public status: string;
	public minute: number;
	public attendance: number;
	public matchday: number;
	public stage: string;
	public group: string;
	public lastUpdated: Date;
    public homeTeam: {
		public id: number;
		public name: string;
	};
    public awayTeam: {
		public id: number;
		public name: string;
	};
    public score: {
		public winner: string;
		public duration: string;
		public fullTime: {
			public homeTeam: number;
			public awayTeam: number;
		},
		public halftime: {
			public homeTeam: number;
			public awayTeam: number;
		},
		public extraTime: {
			public homeTeam: number;
			public homeTeam: number;
		},
		public penalties: {
			public homeTeam: number;
			public awayTeam: number;
		}
	}
	public referees?: Array<object>;
	public goals?: Array<object>;
	public bookings?: Array<object>;
	public substitutions?: Array<object>;
}

