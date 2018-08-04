import { Url } from "url";

export default class Team {
    public id: string;
    public name: string;
    public code: string;
    public shortName: string;
    public crestUrl: Url;
    public otherStatistics: Array<object>;
}

