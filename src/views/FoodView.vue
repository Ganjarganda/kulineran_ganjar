<template>
  <div class="foods">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h3>Daftar <strong>Makanan</strong></h3>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Kesukaan Anda..."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1"
              ><b-icon-search
            /></span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="item_product in products"
          :key="item_product.id"
        >
          <CardProduct :item="item_product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import CardProduct from '@/components/CardProduct';
import axios from 'axios';

export default {
  name: "FoodsView",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      // Make a request using GET
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => {
          // handle success
          console.log("Berhasil : ", response);
          this.setProducts(response.data);
        })
        .catch((error) => {
          // handle error
          console.log("Gagal : ", error);
        });
    },
  },
  mounted() {
    // Make a request using GET
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
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

<style>
</style>