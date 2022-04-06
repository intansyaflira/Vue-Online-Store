<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <br>
                                        <form>
                                            <div class="form-floating mb-3">
                                                <label for="inputEmail">Email address</label>
                                                <input class="form-control" v-model="email" id="inputEmail" type="email" placeholder="name@example.com" />
                                            </div>
                                            <div class="form-floating mb-3">
                                                <label for="inputEmail">Password</label>
                                                <input class="form-control" v-model="kataSandi" id="inputPassword" type="password" placeholder="Password" />
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="btn btn-primary" href="#" v-on:click="login()">Login</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
</template>

<script>
export default ({
    name:"Login_page",
    data() {
        return {
            email: '',
            kataSandi: ''
        }
    },
    methods:{
        login(){
            var datalogin={
                email:this.email,
                password:this.kataSandi,
            };
            this.axios.post("http://localhost/belajar_toko/public/api/login",
            datalogin).then((result)=>{
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('status', true);
                this.$emit("authenticated", true)
                this.$router.replace({name: "Home"})
            }).catch(error=>{
                console.log(error)
                alert('password salah')
            })
        }
    },
    mounted(){
        this.$emit("authenticated", false)//pake emit soalnya variabelnya dari beda file
    }
})
</script>
