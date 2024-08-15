<!--<template>-->
<!--  <NuxtLoadingIndicator color="#e2d7d7" :throttle="0" />-->
<!--  <NuxtLayout>-->
<!--    <NuxtPage />-->
<!--  </NuxtLayout>-->
<!--</template>-->

<template>
  <NuxtLoadingIndicator color="#e2d7d7" :throttle="0" />
  <AppLoading :isVisible="loadingStore.isLoading" /> <!-- اضافه کردن کامپوننت لودینگ سفارشی -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useGlobalLoadingStore } from '@/stores/globalLoading';
import AppLoading from '@/components/AppLoading.vue';

const loadingStore = useGlobalLoadingStore();
</script>
