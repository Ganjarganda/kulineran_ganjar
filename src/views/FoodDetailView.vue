<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <img class="img-fluid shadow" :src="'/assets/images/' + product.gambar" alt="">
        </div>
        <div class="col-md-6">
          <h2><strong>{{product.nama}}</strong></h2>
          <hr />
          <h4>Harga: <strong>Rp{{product.harga}}</strong></h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input type="number" class="form-control" placeholder="1" v-model="pesan.jumlah_pemesanan">
            </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea class="form-control" v-model="pesan.keterangan" placeholder="Keterangan contoh Pedas, Nasi setengah dll..." />
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan"><b-icon-cart /> Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import axios from 'axios';

export default {
  name: "FoodDetailView",
  components: {
    Navbar,
  },
  data() {
    return {
        product: {},
        pesan: {}
    }
  },
  methods:{
    setProduct(data) {
        this.product = data
    },
    pemesanan() {
      console.log("cek pemesanan: ", this.pesan);
      this.pesan.products = this.product;
      //kirim ke keranjang
      //Make a request using POST
      axios.post("http://localhost:3000/keranjangs", this.pesan)
      .then((response)=> {
        //handle success
        console.log("Kirim ke keranjang: Berhasil : ", response);
      })
      .catch((error)=> {
        //handle error
        console.log("Kirim ke keranjang: Gagal : ", error);
      })
    }
  },
    mounted() {
    // Make a request using GET
    axios
      .get("http://localhost:3000/products/"+this.$route.params.id)
      .then((response) => {
        // handle success
        console.log("Berhasil : ", response);
        this.setProduct(response.data);
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