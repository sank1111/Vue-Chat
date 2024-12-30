import { api } from "@/utility/api";
import { getCookie } from "@/utility/helper";
import { defineStore } from "pinia";

export const useFriendStore = defineStore('friendstore', {
    state: () => {
        return {
            friends: [],
            friendInfo: {},
        }
    },

    getters: {
        friendList: (state) => state.friends,
        friendDetails: (state) => state.friendInfo,
    },

    actions: {
        async getAllfriends() {
            try {
                api.defaults.withCredentials = true;
                await api.get('/get-friends')
                    .then(response => {
                        this.friends = response.data.users;
                        console.log(this.friends);
                    }).catch(error => {
                        console.error('Error fetching friends:', error);
                    })
                // this.friends = response.data.users;
            } catch (error) {
                console.error('Error fetching friends:', error);
            }
        },

        getFriendInfo(friend) {
            this.friendInfo = friend;
        }


    }
})
