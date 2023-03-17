<template>
  <div class="relative">
    <div v-if="isLogin" class="flex relative">
      <span class="fixed bg-red-300 z-10">
        <nav-bar></nav-bar>
      </span>
    </div>
    <div class="px-[5%] tablet:px-[10%] mt-[50px] tablet:mt-[200px]">
      <router-view></router-view>
      <div v-if="isLogin">
        <footer-section></footer-section>
      </div>
    </div>
  </div>
</template>

<script>
import FooterSection from './components/FooterSection.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    FooterSection,
    NavBar,
  },
  data() {
    return {
      menu: [''],
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
    isLogin() {
      return this.$store.getters.isLogged
    },
  },
  methods: {
    loadProducts() {
      this.$store.dispatch('getProducts')
    },
  },
  created() {
    this.$watch(
      () => this.$route.path,
      () => this.loadProducts(),
    )
    this.$store.dispatch('getAllCarts')
    this.$router.beforeEach((to) => {
      if (
        // make sure the user is authenticated
        !this.$store.getters.isLogged &&
        //Avoid an infinite loop
        to.name !== 'Login'
      ) {
        // redirect the user to the login page
        return { name: 'Login' }
      }
    })
  },
  mounted() {},
}
</script>

<style></style>
