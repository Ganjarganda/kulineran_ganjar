<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link class="btn btn-success float-right" to="/foods">
            <b-icon-eye /> Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="item_product in products" :key="item_product.id">
          <CardProduct :item="item_product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardProduct from "@/components/CardProduct";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    // Make a request using GET
    axios
      .get("http://localhost:3000/best-products")
      .then( (response) => {
        // handle success
        console.log("Berhasil : ", response);
        this.setProducts(response.data);
      })
      .catch((error) => {
        // handle error
        console.log("Gagal : ", error);
      });
  },
};
</script>
