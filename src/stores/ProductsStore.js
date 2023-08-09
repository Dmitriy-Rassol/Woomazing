import { defineStore } from 'pinia'
import axios from 'axios'
import { useFilterStore } from './FilterStore'
const URL = 'https://64bd19e32320b36433c76a5a.mockapi.io/products'

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: [],
    product: [],
    productsNew: [],
    relatedProducts: [],
    filterStore: useFilterStore()
  }),
  actions: {
    async fetchCollection() {
      this.filterStore.isLoader = true
      if (this.filterStore.currentCategory == 'all') {
        await axios.get(URL).then((response) => {
          this.products = response.data.toReversed()
        })
      } else {
        await axios.get(URL).then((response) => {
          this.products = response.data
            .toReversed()
            .filter((item) => item.type == this.filterStore.currentCategory)
        })
      }
      this.filterStore.isLoader = false
    },
    async fetchCollectionNew() {
      this.filterStore.isLoader = true
      await axios.get(URL).then((response) => {
        this.productsNew = response.data.toReversed().slice(0, 3)
        this.filterStore.isLoader = false
        return this.productsNew
      })
    },
    async getRelatedProducts(type) {
      this.filterStore.isLoader = true
      await axios.get(URL).then((response) => {
        this.relatedProducts = response.data
          .toReversed()
          .filter((item) => item.type == type)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
        this.filterStore.isLoader = false
        return this.relatedProducts
      })
    },
    async getDetails(id) {
      this.filterStore.isLoader = true
      await axios.get(URL).then((response) => {
        let idProduct = response.data.find((item) => item.id == id)
        if (idProduct) {
          this.filterStore.isLoader = false
         return this.product = response.data.filter((item) => item.id == id)  
        }
      })
    }
  }
})
