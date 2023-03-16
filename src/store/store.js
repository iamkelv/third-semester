import { createStore } from 'vuex'
const checkLoginState = localStorage.getItem('auth')
export const store = createStore({
  state() {
    return {
      isLoggin: false || !!checkLoginState,
      products: [],
      cartItems: [{ id: 2, price: 899, qty: 0, title: 'iPhone X' }],
      qty: 0,
      singleProduct: {},
    }
  },
  mutations: {
    products(state, data) {
      state.products = data
    },
    singleProduct(state, data) {
      state.singleProduct = data
      console.log('data')
    },
    login(state) {
      state.isLoggin = true
      localStorage.setItem('auth', 'authenticated')
    },
    logout(state) {
      state.isLoggin = false
      localStorage.removeItem('auth')
    },
    addCart(state, payload) {
      // console.log(payload)
      const selectedProduct = state.cartItems.find(
        (item) => item.id === payload.id,
      )
      console.log(selectedProduct)
      console.log(state.qty)
      // if (!selectedProduct) {
      //   return (state.cartItems = state.cartItems.push(payload))
      // } else {
      //   return (selectedProduct.qty = selectedProduct.qty + payload.qty)
      // }
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addCart', {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        qty: payload.productQty,
      })
    },
    async getProducts({ commit }) {
      const res = await fetch('https://dummyjson.com/products')
      const { products } = await res.json()
      commit('products', products)
    },
    async getSingleProduct({ commit }, id) {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const product = await res.json()
      commit('singleProduct', product)
    },
    getLogin({ commit }) {
      commit('login')
    },
    getLogout({ commit }) {
      commit('logout')
    },
  },

  getters: {
    getProducts(state) {
      return state.products
    },
    isLogged(state) {
      return state.isLoggin
    },
    getSingleProduct(state) {
      return state.singleProduct
    },
    getCart(state) {
      return state.cartItems
    },
    getQty(state) {
      state.qty
    },
  },
})
