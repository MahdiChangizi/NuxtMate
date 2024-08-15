<!--
  Written by: "Mahdi Changizi"
  Feel free to reach out to me:
  My Github: @https://github.com/Mahdichangizi
  My Telegram: @https://t.me/Mahdi_changizi

-->

<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-backdrop" @click="closeModal"></div>
    <div class="modal-box">
      <form method="dialog">
        <div class="flex">
          <h1 class="text-xl font-bold">{{ props.title }}</h1>
          <button class="btn btn-sm btn-circle btn-ghost absolute left-4 top-5" @click="closeModal">✕</button>
        </div>
      </form>

      <div class="mt-6">
        <slot />
      </div>

    </div>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
  title: {
    required: true,
    type: string
  }
}>()

const openModal = () => {
  const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
  modal?.showModal();
};

const closeModal = () => {
  const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
  modal?.close();
  history.back();
};

onMounted(() => {
  openModal();
});
</script>
