export class Game {
    constructor(
        public name: string,
        public type: string,
        public description: string,
        public secretCode: number,
        public _id?: string,
        public scoreRules?: Array<Object>,
        public shareableUrl?: string,
        public competitions?: Array<number>,
        public matches?: Array<object>,
        public creator?: string,
        public admin?: string,
        public users?: Array<string>,
        public other?: Array<string>
    ) {}
}