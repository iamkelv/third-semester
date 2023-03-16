import { createStore } from 'vuex'
const checkLoginState = localStorage.getItem('auth')
export const store = createStore({
  state() {
    return {
      isLoggin: false || !!checkLoginState,
      products: [],
      cartItems: [],
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
      const selectedProduct = state.cartItems.find(
        (item) => item.id === payload.id,
      )
      if (!selectedProduct) {
        state.cartItems = state.cartItems.push(payload)
      }
    },
  },
  actions: {
    GetcartToCart({ commit }, payload) {
      commit('getProduct', {
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
  },
})
