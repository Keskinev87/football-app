export class Match {
    constructor(
    public id: number,
    public leagueId: number,
    public leagueName: string,
    public dateStart: Date,
    public dateEnd: Date,
    public homeTeam: object,
    public awayTeam: object,
    public homeTeamResult: number,
    public awayTeamResult: number,
    public scorer: string,
    public otherStatistics?: object,
    public stage?: string
    ) {}
}