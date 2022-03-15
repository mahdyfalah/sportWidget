import {createStore} from 'vuex'

export default createStore({
    state:{
        selectedTournament: {},
        tournaments: {},
        matches: {}
    },
    getters:{
        selectedTournament: (state) => state.selectedTournament,
        tournaments: (state) => state.tournaments,
        matches: (state) => state.matches
    },
    mutations: {
        changeSelectedTournament(state, tournament){
            console.log(tournament)
            state.selectedTournament = tournament
        },
        changeTournaments(state, tournaments){
            state.tournaments = tournaments
        },
        changeMatches(state, matches){
            state.matches = matches
        }
    },
    actions:{
        loadTournaments({commit}){
            fetch('http://localhost:4000/tournaments')
                .then(response=>(response.json()))
                .then(json=>{
                    commit('changeSelectedTournament', json[0]);
                    commit('changeTournaments', json);
                })
        },
    }
  })