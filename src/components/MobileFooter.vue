<template>
  <v-layout class="overflow-visible fixed px-3" style="height: 56px;">
    <v-bottom-navigation v-model="value" color="teal" grow>
      <v-btn @click="home">
        <v-btn class="text-none" stacked>
          <v-icon><fa-icon icon="fa-sharp fa-house" /></v-icon>
        </v-btn>
        Home
      </v-btn>

      <v-btn>
        <v-btn class="text-none" stacked>
          <v-icon><fa-icon icon="fa-sharp  fa-bars" /></v-icon>
        </v-btn>
        Cartegory
      </v-btn>

      <v-btn @click="cart">
        <v-btn class="text-none" stacked>
          <v-badge content="2" color="error">
            <v-icon><fa-icon icon="fa-sharp fa-cart-shopping " /></v-icon>
          </v-badge>
        </v-btn>
        Cart
      </v-btn>

      <v-btn>
        <v-btn class="text-none" stacked>
          <v-icon><fa-icon icon="fa-sharp fa-user" /></v-icon>
        </v-btn>
        Account
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
  methods: {
    cart() {
      this.$router.push('/cart')
    },
    home() {
      this.$router.push('/')
    },
  },
}
</script>
