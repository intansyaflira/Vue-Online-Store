<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="authenticated">
    <a class="navbar-brand" href="#">Tokped</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            <a>Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pelanggan" class="nav-link">
            <a>Pelanggan</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/product" class="nav-link">
            <a>Produk</a>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Transaksi
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/Rpl">Tambah Transaksi</a>
            <a class="dropdown-item" href="/Tkj">Daftar Transaksi</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/login" v-on:click="logout()" class="nav-link">
            <a>Logout</a>
          </router-link>
        </li>
      </ul>

    </div>
  </nav>
  <router-view @authenticated="setAuthenticated"></router-view>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      authenticated:JSON.parse(localStorage.getItem('status'))

    }
  },
  mounted(){
    if(!this.authenticated){
      this.$router.replace({name: "Login"}); //misalkan sudah logout maka langsung dilempar ke login
    }
  },
  methods:{ 
    setAuthenticated(status){
      this.authenticated=status
    },
    logout(){
      this.authenticated=false
      localStorage.removeItem('status')
      localStorage.removeItem('token')
    }
  }
}
</script>

