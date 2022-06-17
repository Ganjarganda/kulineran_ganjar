<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Kulineran</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto0">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Keranjang <b-icon-bag />
                <span class="badge badge-success ml-2">{{ jumlah_pemesanan.length }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: "NavbarComponent",
  data() {
    return {
      jumlah_pemesanan: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pemesanan = data;
    },
  },
  mounted() {
    // Make a request using GET
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        // handle success
        console.log("Berhasil jumlah product di keranjang : ", response);
        this.setJumlah(response.data);
      })
      .catch((error) => {
        // handle error
        console.log("Gagal jumlah product di keranjang : ", error);
      });
  },
};
</script>

<style></style>
