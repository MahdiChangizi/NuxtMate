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
