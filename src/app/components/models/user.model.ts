export class User {
    constructor(
        public username: string,
        private password: string,
        private fullName?: string,
        public otherData?: Array<object>,
        public games?: Array<number>
    ) {}
    
}
