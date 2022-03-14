"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    constructor(date, teams, score, eventsList) {
        this.date = date;
        this.teams = teams;
        this.score = score;
        this.eventsList = eventsList;
    }
    getDate() {
        return this.date;
    }
    getTeams() {
        return this.teams;
    }
    getScore() {
        return this.score;
    }
    getEventsList() {
        return this.eventsList;
    }
}
exports.Match = Match;
