<script setup>
import { useAuthStore } from '@/stores/authStore/authStore';

const authStore = useAuthStore();
// const friendStore= 
</script>
<template>
    <div class="auth-bg">
        <div class="container p-0">
            <div class="row justify-content-center g-0">
                <div class="col-xl-9 col-lg-8">
                    <div class="authentication-page-content shadow-lg">
                        <div class="d-flex flex-column h-100 px-4 pt-4">
                            <div class="row justify-content-center my-auto">
                                <div class="col-sm-8 col-lg-6 col-xl-6">

                                    <div class="py-md-5 py-4">

                                        <div class="text-center mb-5">
                                            <h3>Register Account</h3>
                                            <p class="text-muted">Get your free Vhato account now.</p>
                                        </div>
                                        <form class="needs-validation" @submit.prevent="authStore.register">
                                            <div class="mb-3">
                                                <label for="useremail" class="form-label">Email</label>
                                                <input type="email" class="form-control" name="email" id="useremail"
                                                    v-model="authStore.email" placeholder="Enter email" required>
                                                <div class="invalid-feedback">
                                                    Please Enter Email
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="username" class="form-label">Username</label>
                                                <input type="text" class="form-control" id="username" name="username"
                                                    v-model="authStore.username" placeholder="Enter username" required>
                                                <div class="invalid-feedback">
                                                    Please Enter Username
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="userpassword" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="userpassword"
                                                    name="password" v-model="authStore.password"
                                                    placeholder="Enter password" required>
                                                <div class="invalid-feedback">
                                                    Please Enter Password
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <p class="mb-0">By registering you agree to the Vhato <a href="#"
                                                        class="text-primary">Terms of Use</a></p>
                                            </div>

                                            <div class="mb-3">
                                                <button class="btn btn-primary w-100 waves-effect waves-light"
                                                    type="submit">Register</button>
                                            </div>
                                            <div class="mt-4 text-center">
                                                <div class="signin-other-title">
                                                    <h5 class="fs-14 mb-4 title">Sign up using</h5>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div>
                                                            <button type="button" class="btn btn-soft-info w-100"><i
                                                                    class="mdi mdi-facebook"></i> Facebook</button>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div>
                                                            <button type="button" class="btn btn-soft-danger w-100"><i
                                                                    class="mdi mdi-google"></i> Google</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form><!-- end form -->

                                        <div class="mt-5 text-center text-muted">
                                            <p>Already have an account ?
                                                <router-link class="fw-medium text-decoration-underline"
                                                    to="login">Login</router-link>
                                            </p>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                            </div><!-- end row -->

                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="text-center text-muted p-4">
                                        <p class="mb-0">&copy;
                                            S_bhattarai
                                            with <i class="mdi mdi-heart text-danger"></i> by UdusGang
                                        </p>
                                    </div>
                                </div><!-- end col -->
                            </div><!-- end row -->

                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container-fluid -->
    </div>
</template>
