export class Match {
    public id: string;
    public homeTeam: string;
    public awayTeam: string;
    public dateStart: Date;
    public dateEnd: Date;
    public homeTeamResult: Number;
    public awayTeamResult: Number;
    public scorer: String;
    public otherStatistics: Array<Object>;
    public league: string;
    public stage: string;    
}