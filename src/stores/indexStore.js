import { defineStore } from "pinia";

export const useindexStore = defineStore('index', {
    state: () => ({
        user: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : null,
        authenticate: !!localStorage.getItem('userInfo'),
    }),
    getters: {
        isAuthenticated: (state) => state.authenticate,
    }
})