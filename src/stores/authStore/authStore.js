import { api } from "@/utility/api";
import { defineStore } from "pinia";

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
        isLoggedIn: state => state.isLoggedIn,
        user: state => state.user
    },

    actions: {
        //register Function
        async register() {
            alert('register Invoked');
            const formdata = new FormData();
            formdata.append('firstName', this.username);
            formdata.append('lastName', 'Gibbs');

            api.post('/users/add', formdata).then(response => {
                this.isLoggedIn = true;
                this.user = response.data;
            })

        },
        login() {

        },
    }
})