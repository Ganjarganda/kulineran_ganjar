<template>
  <div class="foods">
    <Navbar />
    <h3>Daftar Makanan</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'FoodsView',
  components: {
    Navbar,
  },
};
</script>

<style>
</style>