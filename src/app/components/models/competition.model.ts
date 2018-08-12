export class Competition {
    
    constructor(
        public id: number,
        public area: {
            id: number;
            name: string;
        },
        public name: string,
        public code: number,
        public plan: string,
        public currentSeason: {
            id: number;
            startDate: Date;
            endDate: Date;
            currentMatchday: number;
        },
        public seasons: Array<object>,
        public lastUpdated: Date
    ) {}
    }