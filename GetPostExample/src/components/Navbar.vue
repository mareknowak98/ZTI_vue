<template>
    <div>
    <b-button variant="secondary" v-on:click='$router.push("/")'>Przykład 1</b-button>
    <b-button variant="secondary" v-on:click='$router.push("/PostExample")'>Przykład 2</b-button>
    <b-button variant="secondary" v-on:click='$router.push("/PropsExample")'>Przykład 3</b-button>
    <b-button variant="secondary" v-on:click='$router.push("/VuexExample")'>Przykład 4</b-button>

    <hr/>
    </div>
</template>

<script>

export default {
  name: "Navabar",
  
};

