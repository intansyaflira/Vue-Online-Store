<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Pelanggan</h1>
            </div>
        </div>
    </div>
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_pelanggan" v-model="id_pelanggan" placeholder="ID Pelanggan">
        </div>
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
        <button type="submit" class="btn btn-primary" @click="EditPelanggan()">Edit Pelanggan</button>
    </div>
</template>

<script>
export default {
    name:"EditPelanggan", 
    data(){
        return {
            listpelanggan: [],
            id_pelanggan:'',
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
        getpelanggan : function(){
            this.axios.get("http://localhost/belajar_toko/public/api/customers2_tabel").then((result)=>{
                this.listpelanggan=result.data
            })
        },
        getdetailpelanggan(id){
            this.axios.get("http://localhost/belajar_toko/public/api/getdetailpelanggan/"+id).then((result)=>{
                this.id_pelanggan = result.data.id_pelanggan
                this.nama = result.data.nama
                this.alamat = result.data.alamat
                this.telp = result.data.telp
                this.username = result.data.username
                this.password = result.data.password
            })
        },
        EditPelanggan : function(){
            var datapelanggan =
            {
                nama : this.nama,
                alamat : this.alamat, 
                telp : this.telp, 
                username : this.username,  
                password : this.password
            }
            this.axios.put("http://localhost/belajar_toko/public/api/editpelanggan/"+this.id_pelanggan,
            datapelanggan).then((response)=>{
                alert(response.data.message)
                this.$router.push('/Pelanggan')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getpelanggan()
        this.getdetailpelanggan(this.$route.params.id)
    }
   
}
</script>
