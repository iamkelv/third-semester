<template>
  <div class="text-red-500 w-screen bg-black">
    <h1 class="text-green-500">
      <ul class="flex list-none gap-2 mx-auto w-[50%]">
        <li class="cursor-pointer">
          Home
        </li>
        <li class="cursor-pointer">
          Services
        </li>

        <li class="cursor-pointer" v-if="isLogged">
          Profile
        </li>
        <li class="cursor-pointer" v-if="isLogged">
          Logout
        </li>
      </ul>
    </h1>
    <div>
      <button
        class="bg-white text-black rounded-md p-2 cursor-pointer w-[100px]"
        @click="getProducts"
      >
        Get all Products
      </button>
      <button
        v-if="!isLogged"
        class="bg-white text-black rounded-md p-2 cursor-pointer w-[100px]"
        @click="login"
      >
        Login
      </button>
      <button
        v-if="isLogged"
        class="bg-white text-black rounded-md p-2 cursor-pointer w-[100px]"
      >
        logout
      </button>
      <products-items></products-items>
    </div>
  </div>
</template>

<script>
import ProductsItems from './components/ProductsItems.vue'
export default {
  name: 'App',

  data() {
    return {
      // menus: [],
    }
  },
  components: {
    ProductsItems,
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged
    },
  },
  methods: {
    getProducts() {
      this.$store.dispatch('products')
    },
    login() {
      this.$store.dispatch('login')
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style></style>
