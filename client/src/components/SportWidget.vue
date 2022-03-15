<template>
  <div>
    <div class="dropdown" id="tournaments-menu">
      <span>{{selectedTournament.name}}</span>
      <div class="dropdown-content">
        <button v-on:click="handleClick(tournament)" v-for="(tournament, index) in tournaments" :key="index">
          {{tournament.name}}
        </button>
      </div>
    </div>

    <div>
      <table>
        <tr>
          <th v-for="(match, index) in matches" :key="index">
            {{matches[index].date.slice(0,10)}}
            <br>
            {{matches[index].date.slice(12,16)}}
          </th>
        </tr>
        <tr>
          <th v-for="(match, index) in matches" :key="index">
            {{matches[index].teams[0]}}
            <br>
            vs 
            <br>
            {{matches[index].teams[1]}}
          </th>
        </tr>
        <tr>
          <th v-for="(match, index) in matches" :key="index">{{matches[index].score[0]}} : {{matches[index].score[1]}}</th>
        </tr>
        <tr>
          <th v-for="(match, index) in matches" :key="index">{{matches[index].eventsList}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SportWidget',
  props: {
  },
  mounted(){
  },
  methods: {
    fetchMatches(){
      fetch(`http://localhost:4000/matches/${this.selectedTournament.tid}`)
            .then(response=>(response.json()))
            .then(json=>{
                this.$store.commit('changeMatches', json);
            })
    },
    showStateData(){
      console.log('selected tournament: ', this.selectedTournament)
      console.log('tournaments: ', this.tournaments)
      console.log('matches: ', this.matches)
    },
    handleClick(tournament){
      this.$store.commit('changeSelectedTournament', tournament)
    }
  },
  computed: {
    selectedTournament: {
      get(){
        return this.$store.getters.selectedTournament;
      }
    },
    tournaments: {
      get(){
        return this.$store.getters.tournaments;
      }
    },
    matches: {
      get(){
        return this.$store.getters.matches;
      }
    }
  },
  watch: {
    selectedTournament: {
      handler() {
        this.fetchMatches();
      },
      deep: true,
    },
    matches: {
      handler() {
        this.showStateData();
      },
      deep: true
    }
  },
}
</script>

<style scoped>
#tournaments-menu{
    height: auto;
    width: 12%;
    color: #f9f9f9;
    background: darkblue;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    border-radius: 8px;
    margin: 10px 45%;
    text-align: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

table{
  background-color: steelblue;
  border-radius: 8px;
  margin: 100px;

}
th, td {
  border: 1px solid;
  color: whitesmoke;
  border-radius: 8px;
  border-color: aliceblue;
  background-color: rgba(255,255,255,0.2);
}
div{
  font-family: sans-serif;
}
</style>
