<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My Github: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->
<template>
  <div class="fixed z-50 bg-base-100 top-0 lg:w-[80%] w-full backdrop-blur-md bg-base-100/80">
    <div class="navbar">
      <div class="flex-1">
        <h1 class="text-xl text-[#00cb7a] font-bold">TehranMusic</h1>
      </div>
      <div class="flex-none gap-1 md:gap-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div class="card-body">
              <span class="text-lg font-bold">8 آیتم</span>
              <span class="text-info">مجموع: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">مشاهده سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="آواتار کاربر"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a class="justify-between">
                پروفایل
                <span class="badge">جدید</span>
              </a>
            </li>
            <li><a>تنظیمات</a></li>
            <li><a>خروج</a></li>
          </ul>
        </div>
        <div class="open-nav lg:hidden">
          <button @click="toggleSidebar" class="btn btn-primary">باز کردن</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChangeStatusSidebarStore } from '~/stores/changeStatusSidebar';

const sidebarStore = useChangeStatusSidebarStore();
const toggleSidebar = () => {
  sidebarStore.openOrCloseSidebar();
};
</script>
