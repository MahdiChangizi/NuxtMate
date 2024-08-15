import { defineStore } from 'pinia';

export const useGlobalLoadingStore = defineStore('globalLoading', {
    state: () => ({
        isLoading: true
    }),
    actions: {
        startLoading() {
            this.isLoading = true;
        },
        stopLoading() {
            this.isLoading = false;
        }
    }
});
