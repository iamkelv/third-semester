<template>
  <div
    class="flex font-extrabold text-[1rem] items-center justify-center tablet:mb-[10vh] mb-[0vh] w-full"
  >
    <span class="tablet:text-[2.5rem]">Welcome to MefaMart</span>
  </div>
  <div
    class="grid grid-cols-1 relative justify-center items-center tablet:grid-cols-3 p-1 h-[60vh] tablet:-top-[20vh] top-10"
  >
    <span class="flex font-sans gap-1 justify-center flex-col items-center">
      <span class="text-4xl font-bold">
        Sign In to
        <br />
        Shop Direct
      </span>
      <span class="flex flex-col font-bold">
        <br />
        if you don't have an account
        <br />
        <span>
          you can
          <router-link to="register" class="text-[rgb(0,142,204)]">
            Register Here
          </router-link>
        </span>
      </span>
    </span>

    <span class="hidden tablet:flex justify-center items-center">
      <img :src="rocket" alt="" />
    </span>
    <form
      @submit="formSubmitHandler"
      class="flex flex-col justify-center items-center"
    >
      <span class="flex flex-col w-[70%] gap-4">
        <input
          type="email"
          value="test@gmail.com"
          class="bg-[#EAF0F7] p-2 rounded-lg w-full outline-none"
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          value="Kelvisdmdf#@__DS"
          class="bg-[#EAF0F7] p-2 rounded-lg w-full outline-none"
          placeholder="Password"
          required
          maxlength="10"
        />
        <span class="flex text-right justify-end p-2 rounded-lg w-full">
          Forget password?
        </span>
      </span>
      <button
        class="bg-[rgb(0,142,204)] rounded-lg mt-3 text-white p-2 w-full max-w-[70%]"
      >
        {{ isLoading ? 'Loading...' : 'Sign In' }}
      </button>
    </form>
  </div>
</template>

<script>
import rocket from '../assets/img/rocket.png'
export default {
  data() {
    return {
      rocket: rocket,
      isLoading: false,
    }
  },

  computed: {
    getIsLogged() {
      return this.$store.getters.isLogged
    },
  },
  created() {},
  methods: {
    formSubmitHandler(e) {
      e.preventDefault()
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$store.dispatch('getLogin')
        return this.$router.replace('/')
      }, 3000)
    },
  },
}
</script>

<style></style>
