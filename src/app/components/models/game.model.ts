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
    public creator?: string,
	public admin?: string,
	public users?: Array<string>,
    public other?: Array<string>
    ) {}

}