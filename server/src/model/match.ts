export class Match{
    private date: Date;
    private teams: String[];
    private score: number[];
    private eventsList: String;

    constructor(date: Date, teams: String[], score: number[], eventsList: String){
        this.date = date;
        this.teams = teams;
        this.score = score;
        this.eventsList = eventsList;
    }

    getDate(): Date {
        return this.date;
    }
    getTeams(): String[]{
        return this.teams;
    }
    getScore(): number[]{
        return this.score;
    }
    getEventsList(): String{
        return this.eventsList;
    }
}