import { defineStore } from 'pinia'

const getCart = () => {
  let cart = localStorage.getItem('cart')

  return cart ? JSON.parse(cart) : []
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: getCart(),
    total: []
  }),
  actions: {
    addToCart(prodCart) {
      let item = this.cart.find((item) => item.id === prodCart.id && item.size === prodCart.size)
      if (item) {
        item.count += prodCart.count
        item.total = item.count * item.price
      } else {
        this.cart.push({ ...prodCart, total: prodCart.price * prodCart.count })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },

    deleteToCart(prodCart) {
      let index = this.cart.indexOf(prodCart)
      if (index > -1) {
        this.cart.splice(index, 1)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
})
