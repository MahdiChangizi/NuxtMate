<script setup lang="ts">
import {useChangeStatusSidebarStore} from "~/stores/changeStatusSidebar";
const changeStatus = useChangeStatusSidebarStore();
</script>

<template>
  <div class="fixed top-[4.7rem] z-10 bg-base-200 w-screen h-full">
    <div class="h-4/5 overflow-y-scroll">
      <ul class="menu rounded-box grid grid-cols-1 w-full text-[1rem] font-bold">
        <!-- بخش اصلی منو -->
        <li>
          <NuxtLink :to="{ path: 'dashboard' }" @click="changeStatus.openOrCloseSidebar">
            داشبورد
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: 'profile' }" @click="changeStatus.openOrCloseSidebar">
            پروفایل
          </NuxtLink>
        </li>
        <li>
          <a href="#" @click="changeStatus.openOrCloseSidebar">پیام‌ها</a>
        </li>
        <li><NuxtLink :to="{path: 'page-2'}" @click="changeStatus.openOrCloseSidebar">تنظیمات</NuxtLink></li>


        <hr class="my-8 flex dark:border-gray-800 w-full border-t border-dashed"></hr>

        <!-- زیرمنوی 1 -->
        <li>
          <details>
            <summary>محصولات</summary>
            <ul>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">الکترونیک</a></li>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">پوشاک</a></li>
              <li>
                <details>
                  <summary>خانه و باغ</summary>
                  <ul>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">مبلمان</a></li>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">دکور</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <!-- زیرمنوی 2 -->
        <li>
          <details>
            <summary>سفارشات</summary>
            <ul>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">سفارشات معلق</a></li>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">سفارشات تکمیل شده</a></li>
              <li>
                <details>
                  <summary>بازگشت‌ها</summary>
                  <ul>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">درخواست‌های بازگشت</a></li>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">تاریخچه بازگشت‌ها</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <!-- زیرمنوی 3 -->
        <li>
          <details>
            <summary>پشتیبانی</summary>
            <ul>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">سؤالات متداول</a></li>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">تماس با ما</a></li>
              <li>
                <details>
                  <summary>منابع</summary>
                  <ul>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">مستندات</a></li>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">آموزش‌ها</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <!-- زیرمنوی 4 -->
        <li>
          <details>
            <summary>حساب کاربری</summary>
            <ul>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">اطلاعات شخصی</a></li>
              <li><a href="#" @click="changeStatus.openOrCloseSidebar">تنظیمات امنیتی</a></li>
              <li>
                <details>
                  <summary>اطلاع‌رسانی‌ها</summary>
                  <ul>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">هشدارهای ایمیلی</a></li>
                    <li><a href="#" @click="changeStatus.openOrCloseSidebar">هشدارهای پیامکی</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
