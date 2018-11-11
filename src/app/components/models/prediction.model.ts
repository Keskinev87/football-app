export class Prediction {

    constructor(
    public matchId: number,
    public homeTeamScore: number,
    public awayTeamScore: number,
    public gameId: string,
    public userId?: string,
    public scorer?: number
    ) {}
}
