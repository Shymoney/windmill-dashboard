function data() {
  return {
    dark:
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    isNotificationsMenuOpen: false,
    isProfileMenuOpen: false,
    isPagesMenuOpen: false,
    sideMenu: false,
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false
    },
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false
    },
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen
    },
  }
}
