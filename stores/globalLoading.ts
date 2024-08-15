import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useGlobalLoadingStore = defineStore('globalLoading', {
    state: () => ({
        isLoading: ref(false)
    }),

    actions: {
        startLoading() {
            this.isLoading = true;
        },
        stopLoading() {
            this.isLoading = false;
        },
        toggleLoading() {
            this.isLoading = !this.isLoading;
        }
    }
});
