import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: () => ({
    activeTab: 0,
    activeSize: 0,
    sizeQuantity: 1,
    active: false,
    currentCategory: 'all',
    titleCategory: '',
    titleSize: 'S',
    page: 1,
    perPage: 9,
    activePage: 0,
    activeAlert: false,
    activeModal: false,
    isLoader: false,
  }),
  actions: {
    setActiveTab(id, type) {
      this.activeTab = id
      this.currentCategory = type
      this.page = 1
      this.activePage = 0
    },

    setActiveSize(id, tab) {
      this.activeSize = id
      this.titleSize = tab.seze
      this.sizeQuantity = tab.quantity
    },

    setActiveCategory(type, title) {
      this.currentCategory = type
      this.page = 1
      this.activePage = 0
      this.titleCategory = title
    },

    goToPage(numPage) {
      this.page = numPage
      this.activePage = numPage - 1
    },

    setTotalPage(data) {
      this.totalPage = Math.ceil(data.length / this.perPage)
    },
    onActiveAlert() {
      setTimeout(() => {
        this.activeAlert = !this.activeAlert
      }, 3000)
      this.activeAlert = !this.activeAlert
    },
    isActiveModal() {
      
    }
  }
})
