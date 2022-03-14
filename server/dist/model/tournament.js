"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournament = void 0;
class Tournament {
    constructor(tid, name) {
        this.tid = tid;
        this.name = name;
    }
    getTid() {
        return this.tid;
    }
    getName() {
        return this.name;
    }
}
exports.Tournament = Tournament;
