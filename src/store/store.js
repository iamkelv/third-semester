import { createStore } from 'vuex'
const checkLoginState = localStorage.getItem('auth')
export const store = createStore({
  state() {
    return {
      isLoggin: false || !!checkLoginState,
      products: [],
      cartItems: [],
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
      console.log(data)
    },
    login(state) {
      state.isLoggin = true
      localStorage.setItem('auth', 'authenticated')
    },
    logout(state) {
      state.isLoggin = false
      localStorage.removeItem('auth')
    },
    addCart() {},
    getAllCart(state, payload) {
      const newCart = payload.slice(0, 1).map((item) => item.products)
      state.cartItems = state.cartItems.push(newCart[0][0])
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
    async getAllCarts({ commit }) {
      const res = await fetch('https://dummyjson.com/carts')
      const data = await res.json()
      commit('getAllCart', data.carts)
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
    getAllCarts(state) {
      return state.cartItems
    },
  },
})
