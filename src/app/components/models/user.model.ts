export class User {
    constructor(
        private password: string,
        public username: string,
        private fullName?: string,
        public otherData?: Array<object>,
        public games?: Array<number>
    ) {}
    
}
