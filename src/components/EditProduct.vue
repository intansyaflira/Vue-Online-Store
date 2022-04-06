<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Produk</h1>
            </div>
        </div>
    </div>
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_pelanggan" v-model="id_produk" placeholder="ID Produk">
        </div>
        <div class="mb-3">
            <label for="Nama Produk" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" id="Nama Produk" v-model="nama_produk" placeholder="Nama Produk">
        </div>
        <div class="mb-3">
            <label for="Deskripsi" class="form-label">Deskripsi</label>
            <input type="text" class="form-control" id="Deskripsi" v-model="deskripsi" placeholder="Deskripsi">
        </div>
        <div class="mb-3">
            <label for="Harga" class="form-label">Harga</label>
            <input type="number" class="form-control" id="harga" v-model="harga" placeholder="Harga">
        </div>
        <div class="mb-3">
            <label for="Foto Produk" class="form-label">Foto Produk</label>
            <input type="text" class="form-control" id="Foto Produk" v-model="foto_produk" placeholder="Foto Produk">
        </div>
        <button type="submit" class="btn btn-primary" @click="EditProduct()">Edit Produk</button>
    </div>
</template>

<script>
export default {
    name:"EditProduct", 
    data(){
        return {
            listproduct: [],
            id_produk:'',
            nama_produk:'',
            deskripsi:'',
            harga:'',
            foto_produk:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        getproduct : function(){
            this.axios.get("http://localhost/belajar_toko/public/api/product_tabel").then((result)=>{
                this.listproduct=result.data
            })
        },
        getdetailproduct(id){
            this.axios.get("http://localhost/belajar_toko/public/api/getdetailproduct/"+id).then((result)=>{
                this.id_produk = result.data.id_produk
                this.nama_produk = result.data.nama_produk
                this.deskripsi = result.data.deskripsi
                this.harga = result.data.harga
                this.foto_produk = result.data.foto_produk
            })
        },
        EditProduct : function(){
            var dataproduk =
            {
                nama_produk : this.nama_produk,
                deskripsi : this.deskripsi, 
                harga : this.harga, 
                foto_produk : this.foto_produk
            }
            this.axios.put("http://localhost/belajar_toko/public/api/editproduct/"+this.id_produk,
            dataproduk).then((response)=>{
                alert(response.data.message)
                this.$router.push('/Product')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getproduct()
        this.getdetailproduct(this.$route.params.id)
    }
   
}
</script>
