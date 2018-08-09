export default class League {
    public id: number;
    public name: string;
    public matches: Array<object>;
    public dateStart: Date;
    public dateEnd: Date;
    public otherData?: Array<object> {
		currentSeason?: object {
			id: number;
			startDate: Date;
			endDate: Date;
			currentMatchday: number;
		};
		numberOfAvailableSeasons: number;
		lastUpdated: Date;
		
	};
    public otherStatistics?: Array<object>;
}
