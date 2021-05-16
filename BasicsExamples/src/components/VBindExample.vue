<template>
  <div id="VBindExample">
    <h2> v-bind example </h2>

    <div :class="[isChecked ? 'checked' : '']">
      <input type="checkbox" v-model="isChecked" />
      Click to change color! <br><br>
    </div>

    <input type="number" v-model="index" />
    <div :class="findClass()">
       {{index}}
    </div>

  </div>
</template>

<script>
export default {
  name: "VBindExample",
  data(){
    return {
      isChecked: false,
      index: 0
    }
  },
  methods: {
    findClass(){
      let resultClass = ''
      if(this.index % 2 == 0){
        resultClass = 'even'
      }else{
        resultClass = 'odd'
      }
      return resultClass
    }
  }
}
</script>

<style scoped>
.checked {
  color: green;
}
.even{
  color: dodgerblue;
  margin: 10px
}
.odd{
  color: crimson;
  margin: 10px
}
</style>
