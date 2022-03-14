"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const getTournamentMiddleware = require('./middleware/getTournament');
const getMatchMiddleware = require('./middleware/getMatch');
app.get('/tournaments', getTournamentMiddleware);
app.get('/matches/:tid', getMatchMiddleware);
if (process.env.NODE_ENV !== 'test') {
    app.listen(4000, () => console.log('Server Running'));
}
exports.default = app;
