import { Request, Response } from 'express';
import { Tournament } from "../model/tournament";

const fetch = require('node-fetch');
const URL: String = "https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17";


module.exports = function handleGetTournaments(req: Request, res: Response){
    let listOfTournaments: Tournament[] = [];

    fetch(URL, {method : "Get"})
        .then((res: { json: () => any; }) => res.json())
        .then((json: any) => {
            json.doc[0].data.tournaments.forEach((element: {_tid: number, name: String; }) => {
                listOfTournaments.push(new Tournament(element._tid, element.name));
            });
            return res.json(listOfTournaments);
        });
}