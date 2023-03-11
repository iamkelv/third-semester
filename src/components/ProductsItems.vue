<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.is">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.products
    },
  },
}
</script>

<style></style>
