<template>
    <div>
      <b-row>
        <b-col md="3" v-for="game in games" :key="game.id">
          <div class="mb-4">
             <b-card > 
              <b-card-img :src="game.background_image" class="game-image"></b-card-img>
              <p class="card-text">
                <strong>{{game.name}}</strong>
                <br>
                Rating: {{ game.rating }}<br>
                Released: {{ game.released }}<br>
                Updated: {{ game.updated }}
              </p>
              <b-button variant="primary"  :to="`/Opiniones/${game.name}` ">
                Opinar
              </b-button>
              <b-button to="Administracion">
                <i class="fas fa-heart text-danger" ></i>
              </b-button>
  
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </template>
  
  
  
  
  <script>
  export default {
    name: 'HelloWorld.vue',

    data() {
      return {
        games: []
      }
    },
    created() {
      this.fetchGames();
    },
    methods: {
      async fetchGames() {
        const response = await fetch('https://api.rawg.io/api/games?key=1508f707af624718bd051c1d9ed7e251&dates=2019-09-01,2019-09-30&platforms=18,1,7');
        const data = await response.json();
        this.addjuegos(data.results)
        // this.games = data.results;
      },
      addjuegos(data){
        
        this.games = data
      }
    }
  }
  </script>
  <style scoped>
  .game-image {
    height: 200px;
    object-fit: cover;
  }
  
  button {
    text-decoration: none;
    border: none;
    background-color: white;
  }
  </style>