export class Game {

    constructor(
    public id: string,
    public name: string,
    public type: string,
    public shareableUrl: string,
    public secretCode: number,
    public leagues: Array<object>,
    public matches: Array<object>,
    public creator: object,
    public description: String,
	public admin: object,
	public users?: Array<object>,
    public other?: Array<object>
    ) {}

}