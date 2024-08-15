<template>
  <!-- عنوان به صورت متن -->
  <div class="flex flex-col border-b pb-8 pt-5 mb-16 border-gray-700">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4" v-pre>&lt;NuxtLoadingIndicator&gt;</h1>
    <p class="text-xl">Display a progress bar between page navigations.</p>
  </div>

  <div v-for="data in allData">
    {{ data.id }} 
    -
    {{ data.name }}
  </div>
  
</template>

<script setup lang="ts">
import ProductRequests from '~/requests/productRequests';

interface model {
  id: number,
  name: string
}

const allData = ref<null | model[]>(null)

onMounted(async () => {
  const response = await ProductRequests.getAll();
  allData.value = response.data
  
})
</script>
