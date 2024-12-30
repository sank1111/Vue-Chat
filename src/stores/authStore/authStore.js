import { api } from "@/utility/api";
import axios from "axios";
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
            // axios.post('https://react-chat-node.onrender.com/api/messenger/user-login', formdata).
            //     then(response => console.log(response.data))

            api.post('/api/messenger/user-login', formdata).then(response => {
                console.log(response.data)
            })
        },
    }
})