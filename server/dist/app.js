"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
const allowedOrigins = ["http://localhost:4000", "http://localhost:8080"];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = "The CORS policy for this site does not " +
                "allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express_1.default.json());
const getTournamentMiddleware = require('./middleware/getTournament');
const getMatchMiddleware = require('./middleware/getMatch');
app.get('/tournaments', getTournamentMiddleware);
app.get('/matches/:tid', getMatchMiddleware);
if (process.env.NODE_ENV !== 'test') {
    app.listen(4000, () => console.log('Server Running'));
}
exports.default = app;
