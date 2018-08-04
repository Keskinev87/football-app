export default class Game {
    public id: string;
    public name: string;
    public shareableUrl: string;
    public secretCode: number;
    public leagues?: Array<number>;
    public matches?: Array<number>;
    public users?: Array<object>;
    public description: String;
    public creator: object;
    public admin: object;
    public other?: Array<object>;
}
