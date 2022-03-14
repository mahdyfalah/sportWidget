import { Request, Response } from 'express';
import { Match } from '../model/match';

const fetch = require('node-fetch');

module.exports = function handleGetMatches(req:Request, res: Response){
    const URL: string = `https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/${req.params.tid}/2021`;
    let listOfMatches : Match[] = [];

    fetch(URL, {method : "Get"})
        .then((res: { json: () => any; }) => res.json())
        .then((json: any) => {
            let data = json.doc[0].data.matches;

            Object.keys(data).forEach(function(key){
                let date: Date = getDateAndTime(data[key].time.date, data[key].time.time);
                let teams: string[] = [data[key].teams.home.name, data[key].teams.away.name];
                let score: number[] = [data[key].result.home, data[key].result.away];
                let comment: string = data[key].comment;
                
                let match: Match = new Match(date, teams, score, comment);

                listOfMatches.push(match);
            });
            // sort the list in descending order
            listOfMatches.sort((x, y) => +new Date(y.getDate()) - +new Date(x.getDate()));

            // return the first 5 elements
            return res.json(listOfMatches.slice(0, 5));
        });
}

// this function gets date and time as strings and returns a Date object containing both date and time
function getDateAndTime(date: string, time: string): Date{
    let splitedDate: string[] = date.split('/');
    date = splitedDate[1]+'-'+ splitedDate[0]+'-'+splitedDate[2];

    let splitedTime: string[] = time.split(':');

    let dateAndTime: Date = new Date(date);
    dateAndTime.setHours(+splitedTime[0]);
    dateAndTime.setMinutes(+splitedTime[1]);

    return dateAndTime;
}