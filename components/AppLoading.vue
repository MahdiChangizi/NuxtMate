<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My GitHub: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->
<template>
  <div v-show="props.isVisible" class="w-screen h-screen fixed top-1/2 left-1/2 z-50">
    <span class="loading loading-ring loading-lg"></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  isVisible: boolean;
}>();
</script>