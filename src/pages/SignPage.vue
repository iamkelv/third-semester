<template>
  <div id="auth">
    <div
      class="flex font-extrabold text-[1rem] items-center justify-center tablet:mb-[0vh] mb-[0vh] w-full"
    >
      <span class="tablet:text-[2.5rem]">Welcome to MefaMart</span>
    </div>
    <div
      class="grid grid-cols-1 relative justify-center items-center tablet:grid-cols-3 p-1 h-[60vh] tablet:-top-[5vh] top-10"
      v-if="switchLogin"
    >
      <span class="flex font-sans gap-1 justify-center flex-col items-center">
        <span class="text-2xl tablet:text-4xl font-bold">
          Login to MefaMart
        </span>
        <span class="flex flex-col font-bold">
          <br />
          if you don't have an account
          <br />
          <span>
            you can
            <router-link
              @click="toLogin"
              to="register"
              class="text-[rgb(0,142,204)]"
            >
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
    <div
      class="grid grid-cols-1 relative justify-center items-center tablet:grid-cols-3 p-1 h-[60vh] tablet:-top-[20vh] top-10"
      v-if="!switchLogin"
    >
      <span class="flex font-sans gap-1 justify-center flex-col items-center">
        <span class="text-2xl tablet:text-4xl font-bold">
          Register on MefaMart
        </span>
        <span class="flex flex-col font-bold">
          <br />
          Already have an account
          <br />
          <span>
            you can
            <router-link
              @click="toLogin"
              to="register"
              class="text-[rgb(0,142,204)]"
            >
              Login Here
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
            type="text"
            value=""
            class="bg-[#EAF0F7] p-2 rounded-lg w-full outline-none"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value=""
            class="bg-[#EAF0F7] p-2 rounded-lg w-full outline-none"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            value=""
            class="bg-[#EAF0F7] p-2 rounded-lg w-full outline-none"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            value=""
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
  </div>
</template>

<script>
import MyToastComponent from '@/components/MyToastComponent.vue'
import rocket from '../assets/img/rocket.png'
export default {
  data() {
    return {
      rocket: rocket,
      isLoading: false,
      counter: 0,
    }
  },
  computed: {
    getIsLogged() {
      return this.$store.getters.isLogged
    },
    switchLogin() {
      return this.$store.getters.switchLogin
    },
  },

  methods: {
    showToast() {
      // Define the content object with the component, props and listeners
      const content = {
        component: MyToastComponent,
        // Any prop can be passed, but don't expect them to be reactive
        props: {
          counter: this.counter,
        },
        // Listen and react to events using callbacks. In this case we listen for
        // the "click" event emitted when clicking the toast button
        listeners: {
          click: () => {
            this.counter++
            this.$toast.success(`Toast with counter ${this.counter}`, {
              position: 'top-left',
            })
          },
        },
      }

      // Render the toast and its contents
      this.$toast(content, { position: 'bottom-right' })
    },
    formSubmitHandler(e) {
      e.preventDefault()
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
        this.$store.dispatch('getLogin')
        return this.$router.replace('/')
      }, 3000)
      this.showToast()
    },
    toLogin() {
      this.$store.dispatch('switchLogin')
    },
  },
}
</script>

<style scopped>
#auth {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
