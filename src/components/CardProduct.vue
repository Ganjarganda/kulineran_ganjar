<template>
  <div class="card shadow card-product">
    <img
      :src="'/assets/images/' + item.gambar"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ item.nama }}</h5>
      <p class="card-text">Harga : Rp{{ item.harga }}</p>
      <router-link class="btn btn-success" :to="'/foods/'+item.id">
        <b-icon-cart />
        Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProductComponent",
  props: ["item"],
};
</script>

<style>
</style>