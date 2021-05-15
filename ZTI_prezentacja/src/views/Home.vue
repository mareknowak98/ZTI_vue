<template>
  <div class="home">
    <GetExample msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import GetExample from "@/components/GetExample.vue";

export default {
  name: "Home",
  components: {
    GetExample,
  },
};
</script>
