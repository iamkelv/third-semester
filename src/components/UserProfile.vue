<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn class="flex bg-none shadow-none rounded-full" v-bind="props">
          Welcome Back
          <img
            :src="user"
            alt=""
            class="w-[40px] bg-red-500 p-1 rounded-full"
          />
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title class="cursor-pointer">Profile</v-list-item-title>
          <v-list-item-title class="cursor-pointer" @click="onLogout">
            Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import profile from '../assets/img/profile.webp'
export default {
  data: () => ({
    user: profile,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
  methods: {
    onLogout() {
      this.$store.dispatch('getLogout')
      this.$router.replace('/login')
    },
  },
}
</script>
