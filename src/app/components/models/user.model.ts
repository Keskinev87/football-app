export default class User {
    public id: string;
    private name: string;
    private password: string;
    public email: string;
    public otherData: Array<object>;
    public games: Array<number>;
}
