export class User {
    constructor(
        public username: string,
        private password: string,
        public _id?: string,
        private fullName?: string,
        public otherData?: Array<object>,
        public games?: Array<number>
    ) {}
    
}
