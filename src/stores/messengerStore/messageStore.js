import { api } from "@/utility/api";
import { defineStore } from "pinia";

export const useMessageStore = defineStore('messageStore', {
    state: () => {
        return {
            messages: [],
            message: '',
        }
    },
    actions: {
        sendMessage(message) {
            api.post('/send-message', message)
                .then((response) => {
                    this.messages.push(response.data)
                    this.message = '';
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
})