<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="/">Kulineran</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Keranjang <b-icon-bag />
                <span class="badge badge-success ml-2">{{
                  updateKeranjang
                    ? updateKeranjang.length
                    : jumlah_pemesanan.length
                }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavbarComponent",
  data() {
    return {
      jumlah_pemesanan: [],
    };
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pemesanan = data;
    },
  },
  mounted() {
    // Make a request using GET
    axios
      .get("http://localhost:4000/keranjangs")
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
