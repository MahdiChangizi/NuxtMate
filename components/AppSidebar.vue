
<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My GitHub: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->
<script setup lang="ts">
import { SidebarRoutes } from '#imports';
import type { ISidebarRoute } from '#imports';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const sidebarItems: ISidebarRoute[] = SidebarRoutes;
const route = useRoute();
const route_path = computed(() => route.path);

const isSectionOpen = (children: ISidebarRoute[]) => {
  const currentPath = normalizePath(route_path.value);
  return children.some(child => normalizePath(child.route_path || '') === currentPath);
};

const normalizePath = (path: string) => path.replace(/\/$/, '') || '/';
</script>

<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My GitHub: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->
<template>
  <div class="fixed top-[10%] h-full overflow-y-auto overflow-x-hidden bg-base-100 z-10">
    <div class="h-4/5 overflow-y-scroll">
      <ul v-for="(item, index) in sidebarItems" :key="index" class="menu rounded-box grid grid-cols-1 w-56 text-[1rem] font-bold">
        <li v-show="!item.children" :class="{ 'backdrop-blur-xl bg-white/5 rounded-md': item.route_path === route_path }">
          <NuxtLink :to="item.route_path">{{ item.name }}</NuxtLink>
        </li>
        <li v-show="item.children">
          <details :open="isSectionOpen(item.children ?? [])">
            <summary>{{ item.name }}</summary>
            <ul>
              <li v-for="(child, childIndex) in item.children" :key="childIndex" :class="{ 'backdrop-blur-xl bg-white/5 rounded-md': child.route_path === route_path }">
                <NuxtLink :to="child.route_path">{{ child.name }}</NuxtLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My GitHub: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->