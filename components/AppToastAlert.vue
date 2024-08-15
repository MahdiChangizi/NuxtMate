<!--
  
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My GitHub: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->

<template>
    <transition name="slide-up" @click="close" class="cursor-pointer">
        <div v-show="status" class="toast toast-top toast-center z-[1050]">
            <div role="alert" class="alert shadow-lg flex items-center justify-center">
                <div>
                    <h3 v-show="message" class="font-bold">{{ message }}</h3>
                    <div class="text-base font-bold">{{ description }}</div>
                </div>
                <svg v-show="props.type == 'error'" xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current shrink-0 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-show="props.type == 'success'" xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">

/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import { ref, onMounted } from 'vue';
import { SymbolKind } from "vscode-languageserver-types";
import Null = SymbolKind.Null;

const status = ref(true);
const props = defineProps({
    type: {
        type: String,
        default: 'success',
    },
    message: {
        type: String,
    },
    description: {
        type: String,
        default: '',
    },
});

onMounted(() => {
    setTimeout(() => {
        status.value = false;
    }, 2500);
});

const close = () => {
    status.value = false;
};
</script>

<style scoped>
.slide-up-enter-active {
    transition: transform 3s ease-out;
}

.slide-up-leave-active {
    transition: transform 3s ease-in;
}

.slide-up-enter {
    transform: translateY(0%);
}

.slide-up-leave-to {
    transform: translateY(-10000%);
}
</style>
