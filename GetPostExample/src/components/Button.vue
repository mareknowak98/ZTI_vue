<template>
  <button @click="handleClick">{{title}}</button>
</template>

<script>
export default {
  props: {
    title:{
      required:true,
      type:String
    },
    handleClick:{
      required:true,
      type:Function
    }
  }
};
</script>