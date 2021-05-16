<template>
  <div id="VForExample">
    <h2>v-for example </h2>
    <li v-for="(quantity, product) in products" :key="product ">
       {{product}} : {{quantity}}
    </li>
  </div>
</template>

<script>
export default {
  name: "v-for-example",
  data() {
    return {
      products: {
        "pens": 3,
        "books": 2,
        "pencils":4
      }
    }
  }

}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
