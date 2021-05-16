<template>
  <div id="app">

    <VBindExample />
    <VOnExample />
    <VIfExample />
    <VForExample />

  </div>
</template>


<script>

import VBindExample from './components/VBindExample.vue'
import VOnExample from './components/VOnExample.vue'
import VIfExample from './components/VIfExample.vue'
import VForExample from './components/VForExample.vue'

export default {
  name: 'App',
  components: {
    VBindExample,
    VOnExample,
    VIfExample,
    VForExample,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
