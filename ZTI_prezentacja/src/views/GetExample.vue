<template>
  <b-jumbotron class="jumbotron jumbotron-home">
    <b-jumbotron header="Vue.js demo" lead="Example 1 GET request">
      <navbar></navbar>
      
      <b-button variant="primary" v-on:click='getAllData()'>Imieniny na świecie</b-button>
      <b-button variant="primary" v-on:click='getCountryData("pl")'>Imieniny w polsce</b-button>

      <template>
        <div v-if="!Object.keys(nameDays).length == 0">
          <b-table striped hover :items="(Object.entries(nameDays.data.namedays))"></b-table>
        </div>
      </template>

    </b-jumbotron>
  </b-jumbotron>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  name: "HelloWorld",
  data() {
    return {
      nameDays: [],
    };
  },
  // mounted(){
  //   this.getAllData();
  // },
  methods: {
    getAllData() {
      axios.get(`https://api.abalin.net/today`)
      .then(response => this.nameDays = response.data)
      .catch(err => console.log(err))
      
    },

    getCountryData(ctr) {
      const options = {
        method: 'GET',
        url: 'https://api.abalin.net/today',
        params: {
          country: ctr
        },
      };
      axios.request(options)
      .then(response => this.nameDays = response.data)
      .catch(err => console.log(err))
    }
  },
};


</script>

<style scoped>

.jumbotron-home{
    margin: auto;
    padding: auto;
    max-width: 1400px;
    min-height: 1000px;
}
</style>


