import express from 'express';

const cors = require("cors");
const app = express();
const allowedOrigins = ["http://localhost:4000", "http://localhost:8080"];

app.use(
    cors({
        origin: function(origin: string, callback: (arg0: Error | null, arg1: boolean) => any) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);

app.use(express.json());

const getTournamentMiddleware = require('../src/middleware/getTournament')
const getMatchMiddleware = require('../src/middleware/getMatch')

app.get('/tournaments', getTournamentMiddleware);
app.get('/matches/:tid', getMatchMiddleware);


if (process.env.NODE_ENV !== 'test') {
    app.listen(4000, () => console.log('Server Running'));   
}

export default app;