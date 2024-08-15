<template>
  <div dir="rtl">
    <!-- نوار جستجوی اندازه موبایل -->
    <AppHeader class="border-b border-gray-700 lg:hidden p-1" />
    
    <AppMobileSidebar class="lg:hidden" v-show="changeStatus.isOpen" />
    
    <div class="lg:container lg:w-[80%] mx-auto overflow-hidden">
      <AppHeader class="hidden lg:flex" />
      
      <div class="flex justify-between gap-8 pt-7">
        <!--  سمت چپ    -->
        <AppSidebar class="hidden lg:block"/>
        <!--  سمت چپ    -->
        
        <!--  اپلیکیشن    -->
        <div class="mt-16 lg:w-[60%] w-[95%] md:ml-auto mx-auto">
          
          <!--    نوار مسیر    -->
          <div class="breadcrumbs lx:max-w-4xl max-w-xl text-lg text-[#909fb4] font-bold">
            <ul>
              <li>مستندات</li>
              <li>API</li>
              <li>کامپوننت‌ها</li>
            </ul>
          </div>
          <!--    نوار مسیر    -->
          
          <slot />
        </div>
        <!--  اپلیکیشن    -->
        
        <!--  سمت راست    -->
        <!-- <AppSidebar /> -->
        <!--  سمت راست    -->
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useChangeStatusSidebarStore} from "~/stores/changeStatusSidebar";
  const changeStatus = useChangeStatusSidebarStore();
</script>
