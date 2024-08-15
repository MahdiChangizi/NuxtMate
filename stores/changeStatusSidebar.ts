/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

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