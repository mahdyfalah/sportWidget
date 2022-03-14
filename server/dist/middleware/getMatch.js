"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("../model/match");
const fetch = require('node-fetch');
module.exports = function handleGetMatches(req, res) {
    const URL = `https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/${req.params.tid}/2021`;
    let listOfMatches = [];
    fetch(URL, { method: "Get" })
        .then((res) => res.json())
        .then((json) => {
        let data = json.doc[0].data.matches;
        Object.keys(data).forEach(function (key) {
            let date = getDateAndTime(data[key].time.date, data[key].time.time);
            let teams = [data[key].teams.home.name, data[key].teams.away.name];
            let score = [data[key].result.home, data[key].result.away];
            let comment = data[key].comment;
            let match = new match_1.Match(date, teams, score, comment);
            listOfMatches.push(match);
        });
        // sort the list in descending order
        listOfMatches.sort((x, y) => +new Date(y.getDate()) - +new Date(x.getDate()));
        // return the first 5 elements
        return res.json(listOfMatches.slice(0, 5));
    });
};
// this function gets date and time as strings and returns a Date object containing both date and time
function getDateAndTime(date, time) {
    let splitedDate = date.split('/');
    date = splitedDate[1] + '-' + splitedDate[0] + '-' + splitedDate[2];
    let splitedTime = time.split(':');
    let dateAndTime = new Date(date);
    dateAndTime.setHours(+splitedTime[0]);
    dateAndTime.setMinutes(+splitedTime[1]);
    return dateAndTime;
}
