export default class League {
    public id: string;
    public name: string;
    public matches: Array<object>;
    public dateStart: Date;
    public dateEnd: Date;
    public phases: Array<object>;
    public otherData?: Array<object>;
    public otherStatistics?: Array<object>;
}
