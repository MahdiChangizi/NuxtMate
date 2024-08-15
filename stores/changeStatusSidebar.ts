export const useChangeStatusSidebarStore = defineStore('changeStatusSidebar', {
    state: () => ({
        isOpen: false as boolean
    }),
    actions: {
        openOrCloseSidebar() {
            console.log(this.isOpen)
            this.isOpen = !this.isOpen
        },
    }
})