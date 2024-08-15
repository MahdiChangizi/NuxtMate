<template>
  <div class="flex flex-col border-b pb-8 pt-5 mb-16 border-gray-700">
    <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">صفحه داشبورد</h1>
    <p class="text-xl">نمایش نوار پیشرفت بین پیمایش‌های صفحه.</p>
  </div>
  <NuxtLink class="btn btn-primary text-white mb-2 ml-2" :to="{path: 'page-2'}">Test-Page</NuxtLink>
  <button @click="sendRequest" class="btn btn-primary text-white mb-2">Test-request</button>

  <div v-show="!isLoading">
    <ul class="grid grid-cols-4 items-center justify-center">
      <li v-for="todo in todos" :key="todo.id" class="mb-4">
        <img :src="`https://picsum.photos/200?random=${todo.id}`" alt="تصویر تصادفی"
          class="w-32 h-32 object-cover mb-2">
        <p>{{ todo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useHead } from '#app'; // اضافه کردن useHead
import ProductRequests from '~/requests/productRequests';

const { isLoading, startLoading, stopLoading } = useLoading();


interface TodoInterface {
  id: number,
  title: string,
}

const todos = ref<TodoInterface[]>([]);
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// تابع برای دریافت داده‌ها از API
const fetchTodos = async () => {
  try {
    // بررسی داده‌های کش شده
    const cachedData = localStorage.getItem('todos');
    if (cachedData) {
      todos.value = JSON.parse(cachedData);
      return;
    }

    // درخواست به API اگر داده‌ها در کش وجود ندارند
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('پاسخ شبکه صحیح نبود');
    }
    todos.value = await response.json();

    // ذخیره داده‌ها در localStorage
    localStorage.setItem('todos', JSON.stringify(todos.value));
  } catch (error) {
    console.error('خطا در دریافت داده‌ها:', error);
  }
};

const sendRequest = () => {
  ProductRequests.create({name: 'hi'});
}

onMounted(fetchTodos);

// تنظیمات useHead برای تنظیم عنوان و متا دیتاها
useHead({
  title: 'صفحه داشبورد',
  meta: [
    { name: 'description', content: 'نمایش نوار پیشرفت بین پیمایش‌های صفحه.' },
  ]
});
</script>
