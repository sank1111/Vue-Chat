<script setup>
import { useAuthStore } from '@/stores/authStore/authStore';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const authStore = useAuthStore();

watch(() => authStore.isLoggedIn, (newValue) => {
    if (newValue === true) {
        router.push('/');
    }
}, { immediate: true });

</script>
<template>
    <div class="auth-bg">
        <div class="container p-0">
            <div class="row justify-content-center g-0">
                <div class="col-xl-9 col-lg-8">
                    <div class="authentication-page-content shadow-lg">
                        <div class="d-flex flex-column h-100 px-4 pt-4">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-lg-6 col-xl-6">

                                    <div class="py-md-5 py-4">

                                        <div class="text-center mb-5">
                                            <h3>Welcome Back !</h3>
                                            <p class="text-muted">Sign in to continue to Vhato.</p>
                                        </div>
                                        <form @submit.prevent="authStore.login">
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="text" v-model="authStore.email" class="form-control"
                                                    id="email" name="email" placeholder="Enter Email">
                                            </div>

                                            <div class="mb-3">
                                                <div class="float-end">
                                                    <router-link to="/reset-password" class="text-muted">Forgot
                                                        password?</router-link>
                                                </div>
                                                <label for="userpassword" class="form-label">Password</label>
                                                <div class="position-relative auth-pass-inputgroup mb-3">
                                                    <input v-model="authStore.password" type="password"
                                                        class="form-control pe-5" name="password"
                                                        placeholder="Enter Password" id="password-input">
                                                    <button
                                                        class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                                        type="button" id="password-addon"><i
                                                            class="ri-eye-fill align-middle"></i></button>
                                                </div>
                                            </div>

                                            <div class="form-check form-check-info fs-16">
                                                <input class="form-check-input" type="checkbox" id="remember-check">
                                                <label class="form-check-label fs-14" for="remember-check">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div class="text-center mt-4">
                                                <button class="btn btn-primary w-100" type="submit">Log In</button>
                                            </div>
                                            <div class="mt-4 text-center">
                                                <div class="signin-other-title">
                                                    <h5 class="fs-14 mb-4 title">Sign in with</h5>
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
                                            <p>Don't have an account ?
                                                <!-- <a href=""> Register</a> -->
                                                <router-link class="fw-medium text-decoration-underline"
                                                    to="register">Register</router-link>
                                            </p>

                                        </div>
                                    </div>
                                </div><!-- end col -->
                            </div><!-- end row -->

                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="text-center text-muted p-4">
                                        <p class="mb-0">&copy;
                                            S_Bhattarai
                                            with <i class="mdi mdi-heart text-danger"></i> by udusGang
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