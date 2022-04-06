<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Tambah Pelanggan</h1>
            </div>
        </div>
    </div>
    <div class="modal-body" >
        <div class="mb-3">
            <label for="Nama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="nama" placeholder="Nama">
        </div>
        <div class="mb-3">
            <label for="Alamat" class="form-label">Alamat</label>
            <input type="text" class="form-control" id="Alamat" v-model="alamat" placeholder="Alamat">
        </div>
        <div class="mb-3">
            <label for="Nomor Telepon" class="form-label">Nomor Telepon</label>
            <input type="number" class="form-control" id="telp" v-model="telp" placeholder="Nomor Telepon">
        </div>
        <div class="mb-3">
            <label for="Username" class="form-label">Username</label>
            <input type="text" class="form-control" id="Username" v-model="username" placeholder="Username">
        </div>
        <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input type="number" class="form-control" id="Password" v-model="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" @click="simpanPelanggan()">Submit</button>
        <!-- <p v-bind:class="style_mess">
            <p v-if="error" v-for="mess in message">{{mess}}</p>
            <p v-else>{{message}}</p>
        </p> -->
    </div>
</template>

<script>
export default {
    name:"TambahPelanggan", 
    data(){
        return {
            nama:'',
            alamat:'',
            telp:'',
            username:'',
            password:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        simpanPelanggan : function(){
            var datapelanggan =
            {
                nama : this.nama,
                alamat : this.alamat, 
                telp : this.telp, 
                username : this.username,  
                password : this.password
            }
            this.axios.post("http://localhost/belajar_toko/public/api/tambahpelanggan",
            datapelanggan).then((response)=>{
                alert(response.data.message)
                this.$router.push('/Pelanggan')
                console.log(response)
            })
        }
    }
   
}
</script>
