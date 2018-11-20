export class Prediction {

    constructor(
    public matchId: number,
    public homeTeamScore: number,
    public awayTeamScore: number,
    public gameId: string,
    public scoreRules: object,
    public _id?: string,
    public userId?: string,
    public scorer?: number
    ) {}
}
