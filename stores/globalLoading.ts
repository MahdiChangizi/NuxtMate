/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

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
