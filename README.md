to start the server please go to server directory in terminal and enter

        npm run start
you can see that the server is running on localhost:4000
then open a new terminal window and go to client directory and enter

        npm run serve
you can see that the vue app is running on localhost:8080
in the app go over the top button which has bundesliga as default value
choose whichever tournament that you like and see the info on the last five games in the table

for unit testing go to server directory and enter

        npm run test

this project uses node.js, typescript, vue
and multiple libraries such as node-fecth, vuex, jest etc

please note that, if enter npm run build in server directory, you have to fix the middleware roots inside
server/dist/app.js to

        const getTournamentMiddleware = require('./middleware/getTournament');
        const getMatchMiddleware = require('./middleware/getMatch');