import { defineNuxtPlugin } from '#app';
import { createApp, h, ref, defineComponent, defineAsyncComponent, nextTick } from 'vue';

interface Toast {
    type: string;
    message: string;
    description: string | null;
}

interface ToastPlugin {
    addToast: (type: string, message: string, description?: string | null) => void;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $toast?: ToastPlugin;
    }
}

const AppToastAlert = defineAsyncComponent(() =>
    import('../components/AppToastAlert.vue')
);

const ToastContainer = defineComponent({
    setup() {
        const toasts = ref<Toast[]>([]);

        const addToast = (type: string, message: string, description: string | null = null) => {
            toasts.value.push({ type, message, description });
            setTimeout(() => {
                toasts.value.shift();
            }, 3000);
        };

        return { toasts, addToast };
    },
    render() {
        return h('div', { class: 'toast-container' },
            this.toasts.map((toast, index) =>
                h(AppToastAlert, {
                    key: index,
                    type: toast.type,
                    message: toast.message,
                    description: toast.description ?? ''
                })
            )
        );
    }
});

export default defineNuxtPlugin(nuxtApp => {
    const showToast = (type: string, message: string, description?: string | null) => {
        nextTick(() => {
            const app = createApp(ToastContainer);
            const mountPoint = document.createElement('div');
            document.body.appendChild(mountPoint);
            const instance = app.mount(mountPoint) as InstanceType<typeof ToastContainer>;

            nuxtApp.vueApp.config.globalProperties.$toast = {
                addToast: instance.addToast
            };

            if (nuxtApp.vueApp.config.globalProperties.$toast?.addToast) {
                nuxtApp.vueApp.config.globalProperties.$toast.addToast(type, message, description ?? '');
            }
        });
    };

    nuxtApp.provide('showToast', showToast);
});
