import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      products: [],
    }
  },
  mutations: {
    login(state) {
      console.log('login')
      state.isLoggedIn = true
    },
    logout(state) {
      console.log('login')
      state.isLoggedIn = false
    },
    products(state, payload) {
      state.products = payload
    },
  },
  actions: {
    products(context) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('products', data)
        })
    },
    login(context) {
      context.commit('login')
    },
    logout(context) {
      context.commit('logout')
    },
  },
  getters: {
    isLogged(state) {
      return state.isLoggedIn
    },
    products(state) {
      return state.products
    },
  },
})
