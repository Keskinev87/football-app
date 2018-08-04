export default class Match {
    public id: string;
    public leagueId: number;
    public leagueName: string;
    public stage?: string;
    public dateStart: Date;
    public dateEnd: Date;
    public homeTeam: object;
    public awayTeam: object;
    public homeTeamResult: number;
    public awayTeamResult: number;
    public scorer: string;
    public otherStatistics?: object;
}