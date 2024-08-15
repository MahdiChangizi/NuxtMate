export const useChangeStatusSidebarStore = defineStore('changeStatusSidebar', {
    state: () => ({
        isOpen: false as boolean
    }),
    actions: {
        openOrCloseSidebar() {
            this.isOpen = !this.isOpen
        },
    }
})