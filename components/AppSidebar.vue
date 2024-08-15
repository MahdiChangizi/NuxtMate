<script setup lang="ts">
</script>

<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My Github: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->

<template>
  <div class="fixed-scrollable overflow-y-scroll bg-base-100 z-10">

    <div class="h-4/5 overflow-y-scroll">
      <ul class="menu rounded-box grid grid-cols-1 w-56 text-[1rem] font-bold">
        <li><NuxtLink :to="{path: 'dashboard'}">داشبورد</NuxtLink></li>
        <li><NuxtLink :to="{path: 'profile'}">پروفایل</NuxtLink></li>
        <li><a href="#">پیام‌ها</a></li>
        <li><NuxtLink :to="{path: 'page-2'}">تنظیمات</NuxtLink></li>

        <hr class="my-8 flex dark:border-gray-800 w-full border-t border-dashed"></hr>

        <li>
          <details>
            <summary>محصولات</summary>
            <ul>
              <li><a href="#">الکترونیک</a></li>
              <li><a href="#">پوشاک</a></li>
              <li>
                <details>
                  <summary>خانه و باغ</summary>
                  <ul>
                    <li><a href="#">مبلمان</a></li>
                    <li><a href="#">دکور</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>سفارشات</summary>
            <ul>
              <li><a href="#">سفارشات معلق</a></li>
              <li><a href="#">سفارشات تکمیل شده</a></li>
              <li>
                <details>
                  <summary>بازگشت‌ها</summary>
                  <ul>
                    <li><a href="#">درخواست‌های بازگشت</a></li>
                    <li><a href="#">تاریخچه بازگشت‌ها</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>پشتیبانی</summary>
            <ul>
              <li><a href="#">سؤالات متداول</a></li>
              <li><a href="#">تماس با ما</a></li>
              <li>
                <details>
                  <summary>منابع</summary>
                  <ul>
                    <li><a href="#">مستندات</a></li>
                    <li><a href="#">آموزش‌ها</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>حساب کاربری</summary>
            <ul>
              <li><a href="#">اطلاعات شخصی</a></li>
              <li><a href="#">تنظیمات امنیتی</a></li>
              <li>
                <details>
                  <summary>اطلاع‌رسانی‌ها</summary>
                  <ul>
                    <li><a href="#">هشدارهای ایمیلی</a></li>
                    <li><a href="#">هشدارهای پیامکی</a></li>
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

<style scoped>
.fixed-scrollable {
  position: fixed;
  top: 10%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My Github: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->