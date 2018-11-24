export class User {
    constructor(
        public username: string,
        private password: string,
        private fullName?: string,
        public _id?: string,
        public otherData?: Array<object>,
        public games?: Array<number>
    ) {}
    
}
