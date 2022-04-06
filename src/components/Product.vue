<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Data Produk</h1> 
                <router-link class="btn btn-primary" :to="{path:'/product/tambahproduct'}">Tambah Produk</router-link>
            </div>
        </div>
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">ID produk</th>
            <th scope="col">Nama Produk</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Harga</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(produk, index) in dataproduk" :key="produk.id">
                <td>{{index+1}}</td>
                <td>{{produk.id_produk}}</td>
                <td>{{produk.nama_produk}}</td>
                <td>{{produk.deskripsi}}</td>
                <td>{{produk.harga}}</td> 
                <!-- <td><router-link class="btn btn-success" :to="{path:'produk/Editproduk/'+produk.id_produk}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                    <button type="button" class="btn btn-primary" @click="hapusproduct(produk.id_produk)">Hapus</button>
                    <router-link class="btn btn-success" :to="{path:'/product/EditProduct/'+produk.id_produk}">Edit</router-link>
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    export default {
        name:"produk_ok",
        data(){
            return {
                dataproduk:[],
            }
        },
        methods:{
            getproduk : function(){
                this.axios.get("http://localhost/belajar_toko/public/api/product_tabel").then((result)=>{
                    console.log(result)
                    this.dataproduk=result.data
                })
            },
            hapusproduct : function(id){
                this.axios.delete("http://localhost/belajar_toko/public/api/hapusproduct/"+id).then((response)=>{
                    alert(response.data.message)
                    location.reload();
                    // console.log(response)
                })
            }
        },
        mounted(){
            this.getproduk()
        }
    }
</script>
