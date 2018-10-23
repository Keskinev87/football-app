export class Game {

    constructor(
    public name: string,
    public type: string,
    public description: String,
    public secretCode: number,
    public id?: string,
    public shareableUrl?: string,
    public leagues?: Array<object>,
    public matches?: Array<object>,
    public creator?: object,
	public admin?: object,
	public users?: Array<object>,
    public other?: Array<object>
    ) {}

}