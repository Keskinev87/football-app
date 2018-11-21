export class ScoreRules {
    constructor(
        public exactTie: number,
        public tie: number,
        public exactMatch: number,
        public goalDiff: number,
        public oneGoalDiff: number,
        public guessedWinner: number,
        public zeroZero: number,
        public finalWinner: number,
        public topScorer?: string
    ) {}
}

