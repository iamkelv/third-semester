<template>
  <nav class="flex flex-col relative w-screen px-[10%] bg-white gap-5">
    <top-nav></top-nav>
    <navigation-bar></navigation-bar>
    <div class="flex">
      <navigation-menu :click="true" :menus="menus"></navigation-menu>
    </div>
  </nav>
</template>

<script>
import NavigationBar from './NavigationBar.vue'
import NavigationMenu from './NavigationMenu.vue'
import TopNav from './TopNav.vue'

export default {
  emits: ['click'],
  computed: {
    isLogin() {
      return this.$store.getters.isLogged
    },
  },
  components: {
    NavigationBar,
    TopNav,
    NavigationMenu,
  },
  data() {
    return {
      menus: ['Smart Phones', 'Laptops', 'Fragrances', 'Skincare', 'Groceries'],
    }
  },
  methods: {
    kelvin() {
      this.$emit('click')
    },
  },
}
</script>

<style></style>
