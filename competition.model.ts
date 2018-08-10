export default class League {
    public id: number;
	public area: {
		id: number;
		name: string;
	}
    public name: string;
	public currentSeason: {
		id: number;
		startDate: Date;
		endDate: Date;
		currentMatchday: number;
	};
	public seasons: [{
		id: number;
		startDate: Date;
		endDate: Date;
		currentMatchday: number;
	}];
	public lastUpdated: Date;
    public matches?: Array<number>;
    public otherStatistics?: Array<object>;
}
