<template>
  <div class="flex flex-col border-b pb-8 pt-5 mb-16 border-gray-700">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">صفحه پروفایل</h1>
    <p class="text-xl">نمایش نوار پیشرفت بین ناوبری صفحات.</p>
  </div>

  <div v-if="users.length > 0" class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- سرستون -->
      <thead>
        <tr>
          <th></th>
          <th>شناسه</th>
          <th>شناسه کاربر</th>
          <th>نام</th>
        </tr>
      </thead>
      <tbody>
        <!-- ردیف 1 -->
        <tr v-for="(user, index) in users" :key="index">
          <th></th>
          <th>{{ user.id }}</th>
          <td>{{ user.userId }}</td>
          <td>{{ user.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>

<!--  <div v-else class="flex justify-center">-->
<!--    <span class="loading loading-ring loading-lg"></span>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface userInterface {
  id: number,
  userId: number,
  title: string,
}

const users = ref<userInterface[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('پاسخ شبکه مناسب نبود');
    }
    users.value = await response.json();

    console.log(users.value);
    
  } catch (error) {
    console.error('خطا در دریافت داده‌ها:', error);
  }
});
</script>
