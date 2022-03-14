import express from 'express';
const app = express();

const getTournamentMiddleware = require('../src/middleware/getTournament')
const getMatchMiddleware = require('../src/middleware/getMatch')

app.get('/tournaments', getTournamentMiddleware);
app.get('/matches/:tid', getMatchMiddleware);


if (process.env.NODE_ENV !== 'test') {
    app.listen(4000, () => console.log('Server Running'));   
}

export default app;