import { api } from "@/utility/api";
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
                const response = await api.get('/users');
                this.friends = response.data.users;
            } catch (error) {
                console.error('Error fetching friends:', error);
            }
        },

        getFriendInfo(friend) {
            console.log('freien details',  friend);
            this.friendInfo = friend;
        }


    }
})
