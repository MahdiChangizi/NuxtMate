import { createApp, h, ref, defineComponent } from 'vue';
import type { App } from 'vue';

import BaseToastAlert from '../components/BaseToastAlert.vue';

// Define the data type for a Toast object
interface Toast {
    type: string;
    message: string;
    description: string;
}

// Define the ToastContainer component
const ToastContainer = defineComponent({
    setup() {
        // Reactive reference to hold the list of toasts
        const toasts = ref<Toast[]>([]);

        // Function to add a new toast to the list
        // The toast will automatically be removed after 3 seconds
        const addToast = (type: string, message: string, description: string) => {
            toasts.value.push({ type, message, description });
            setTimeout(() => {
                toasts.value.shift(); // Remove the oldest toast
            }, 3000);
        };

        return { toasts, addToast };
    },
    render() {
        // Render the toast container and map through each toast
        return h('div', { class: 'toast-container' },
            this.toasts.map((toast, index) =>
                // Render BaseToastAlert component for each toast
                h(BaseToastAlert, {
                    key: index,
                    type: toast.type,
                    message: toast.message,
                    description: toast.description
                })
            )
        );
    }
});

// Define the type for globalProperties.$toast
interface ToastGlobalProperties {
    addToast: ((type: string, message: string, description: string) => void) | null;
}

// Create the Vue application instance with ToastContainer as root component
const app: App = createApp(ToastContainer);

// Add $toast property to globalProperties with an initial null value
app.config.globalProperties.$toast = {
    addToast: null
} as ToastGlobalProperties;

// Create a mount point and append it to the document body
const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

// Mount the app to the mount point and get the instance
const instance = app.mount(mountPoint) as InstanceType<typeof ToastContainer>;

// Set the addToast function on globalProperties.$toast to the instance's addToast method
app.config.globalProperties.$toast.addToast = instance.addToast;

// Export a function to show a toast by accessing the global $toast property
export const showToast = (type: string, description: string) => {
    if (app.config.globalProperties.$toast.addToast) {
        app.config.globalProperties.$toast.addToast(type, description);
    }
};
