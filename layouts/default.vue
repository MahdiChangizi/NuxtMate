<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My GitHub: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->
<template>
  <div dir="rtl">
    <AppHeader class="border-b border-gray-700 lg:hidden p-1" />
    <AppMobileSidebar class="lg:hidden" v-show="changeStatus.isOpen" />
    <div class="lg:container lg:w-[80%] mx-auto overflow-hidden">
      <AppHeader class="hidden lg:flex" />
      <div class="flex justify-between gap-8 pt-7">
        <AppSidebar class="hidden lg:block" />
        <div class="mt-16 lg:w-[60%] w-[95%] md:ml-auto mx-auto">
          <div class="breadcrumbs lx:max-w-4xl max-w-xl text-lg text-[#909fb4] font-bold">
            <ul>
              <li>مستندات</li>
              <li>API</li>
              <li>کامپوننت‌ها</li>
            </ul>
          </div>
          <slot />
        </div>
        <!-- <AppSidebar /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChangeStatusSidebarStore } from "~/stores/changeStatusSidebar";
const changeStatus = useChangeStatusSidebarStore();
</script>
