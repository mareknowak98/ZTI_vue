<template>
  <b-jumbotron class="jumbotron jumbotron-home">
    <b-jumbotron header="Vue.js demo" lead="Example 3 propss">
        <div id="app">
            <navbar/>
            <custom-button title="Like" :handleClick="likeClickHandel"></custom-button>
        </div>
    </b-jumbotron>
  </b-jumbotron>
</template>

<script>

import Button from '../components/Button.vue'
import Navbar from "../components/Navbar.vue";

export default{
components:{
    Navbar,
    'custom-button': Button
},
name: "PropsExample",

methods: {
    likeClickHandel: function() {
        // logic goes here
    console.log("store the like");
    }
}

}
</script>

<style scoped>

.jumbotron-home{
    margin: auto;
    padding: auto;
    max-width: 1400px;
    min-height: 1000px;
}
</style>
