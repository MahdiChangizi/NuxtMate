/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import { defineNuxtPlugin } from '#app';
import { useGlobalLoadingStore } from '@/stores/globalLoading';

export default defineNuxtPlugin((nuxtApp) => {
    const loadingStore = useGlobalLoadingStore();

    nuxtApp.hook('page:start', () => {
        loadingStore.startLoading();
    });

    nuxtApp.hook('page:finish', () => {
        loadingStore.stopLoading();
    });

    nuxtApp.hook('app:error', () => {
        loadingStore.stopLoading();
    });
});
