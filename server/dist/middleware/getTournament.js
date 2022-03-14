"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournament_1 = require("../model/tournament");
const fetch = require('node-fetch');
const URL = "https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17";
module.exports = function handleGetTournaments(req, res) {
    let listOfTournaments = [];
    fetch(URL, { method: "Get" })
        .then((res) => res.json())
        .then((json) => {
        json.doc[0].data.tournaments.forEach((element) => {
            listOfTournaments.push(new tournament_1.Tournament(element._tid, element.name));
        });
        return res.json(listOfTournaments);
    });
};
