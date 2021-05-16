<template>
  <div id="VOnExample">
    <h2>v-on example </h2>
    <p>Counter value is {{counter}}</p>
    <button v-on:click="increment"> + 1 </button>
  </div>

</template>

<script>
export default {
  name: "v-on-example",
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter += 1
    }
  }

}
</script>

<style scoped>

</style>
