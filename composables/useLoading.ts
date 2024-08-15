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