import { api } from "@/utility/api";
import axios from "axios";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            isLoggedIn: false,
            user: null,
            email: '',
            username: '',
            password: '',
        }
    },
    getters: {
        user: state => state.user
    },

    actions: {

        //register Function
        async register() {
            const formdata = new FormData();
            formdata.append('firstName', this.username);
            formdata.append('lastName', 'Gibbs');

            api.post('/users/add', formdata).then(response => {
                this.isLoggedIn = true;
                this.user = response.data;
            })

        },
        login() {
            const formdata = new FormData();
            formdata.append('email', this.email);
            formdata.append('password', this.password);

            api.post('/user-login', formdata)
                .then(response => {
                    toast.success(response.data.message);
                    setTimeout(() => {
                        this.isLoggedIn = true;
                    }, 2000);
                    const token = response.data.token;
                    // setting the cookie 
                    document.cookie = `auth_token=${token}; path=/; max-age=3600; SameSite=None; Secure`;
                    localStorage.setItem('userInfo', response.data.user);

                })
                .catch((error) => {
                    if (error.response) {
                        toast(error.response.data.message, { type: 'error' });
                    } else if (error.request) {
                        toast('Error connecting to the server', { type: 'error' });
                    }
                });
        }
    }
})