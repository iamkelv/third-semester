<template>
  <div
    class="grid grid-cols-1 tablet:grid-cols-3 w-full items-center font-sans gap-2"
  >
    <span
      class="hidden tablet:flex text-[#008ECC] text-[1.5rem] font-bold items-center gap-2"
    >
      <fa-icon icon="fa-solid fa-arrow-up-wide-short" />
      <router-link to="/">
        <span>MefaMart</span>
      </router-link>
    </span>
    <span class="flex items-center justify-center">
      <span
        class="flex p-3 rounded-xl w-full mt-5 border tablet:py-3 border-solid border-gray-400 tablet:mt-0 items-center min-w-[75%] mx-auto gap-5 tablet:border-none"
      >
        <fa-icon icon="search" class="text-[#008ECC] cursor-pointer" />
        <input
          class="outline-none border-none w-full"
          type="text"
          placeholder="Search esssential, grocesries and more"
        />
        <fa-icon
          icon="fa-solid fa-list"
          class="text-[#008ECC] cursor-pointer"
        />
      </span>
      <span class="flex tablet:hidden items-center">
        <v-btn class="text-none p-0 shadow-none bg-white text-white" stacked>
          <v-badge content="2" color="error" class="">
            <v-icon class="outline-red-500" color="black">
              <fa-icon icon="fa-sharp fa-bell" class="" />
            </v-icon>
          </v-badge>
        </v-btn>
      </span>
    </span>

    <span
      class="w-[80%] mx-auto mr-0 hidden tablet:flex justify-between items-center"
    >
      <span v-if="!isLogged" class="flex gap-1 items-center cursor-pointer">
        <fa-icon icon="user" class="text-[#008ECC]" />
        <span><router-link to="/login">Sign In/ Sign up</router-link></span>
      </span>
      <span v-if="isLogged" class="gap-1 items-center cursor-pointer">
        <span>
          <span><user-profile></user-profile></span>
        </span>
      </span>
      <span class="flex items-center gap-2">
        <router-link to="/cart">
          <span class="relative">
            <span
              class="absolute -top-2 p-1 text-[12px] -right-2 bg-black flex text-white w-[1rem] h-[1rem] items-center justify-center rounded-full"
            >
              {{ cartQty }}
            </span>
            <fa-icon class="text-[#008ECC]" icon="fa-solid fa-cart-shopping" />
          </span>

          <span>Cart {{ cartQty }}</span>
        </router-link>
      </span>
    </span>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue'

export default {
  components: {
    UserProfile,
  },

  computed: {
    isLogged() {
      return this.$store.getters.isLogged
    },
    cartQty() {
      return this.$store.getters.getQty
    },
  },
}
</script>

<style></style>
