<template>
  <div class="foods">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Daftar Makanan</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "FoodsView",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>