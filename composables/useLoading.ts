/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import { computed } from 'vue';
import { useGlobalLoadingStore } from '@/stores/globalLoading';

export function useLoading() {
    const loadingStore = useGlobalLoadingStore();
    
    return {
        isLoading: computed(() => loadingStore.isLoading),
        startLoading: loadingStore.startLoading,
        stopLoading: loadingStore.stopLoading
    };
}