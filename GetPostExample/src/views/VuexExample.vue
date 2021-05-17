<template>
  <b-jumbotron class="jumbotron jumbotron-home">
    <b-jumbotron header="Vue.js demo" lead="Example 4 Vuex">
      <navbar></navbar>
      {{ $store.state.counter }}
    <hr/>
      {{ $store.state.counter }}
      <sup>2</sup> = 
      {{ $store.getters.counterSquared }}
    <hr/>
    <b-button variant="success" v-on:click="$store.commit('increaseCounter')">Button</b-button>
    <b-button variant="danger" v-on:click="$store.commit('decreaseCounter')">Button</b-button>

    </b-jumbotron>
  </b-jumbotron>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  name: "VuexExample",
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


