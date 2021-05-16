<template>
  <div id="VIfExample">
    <h2>v-if example</h2>

    <input type="text" v-model="text" />

    <p v-if="text === ''"> Text is empty </p>
    <p v-else-if="text === 'smail'"> :-) </p>
    <p v-else> {{text}}</p>

  </div>
</template>


<script>
export default {
  name: "v-if-example",
  data(){
    return{
      text: ''
    }
  }

}
</script>

<style scoped>

</style>
