<template>
  <hero-slider></hero-slider>
  <div class="flex flex-col gap-5">
    <product-category
      :title="'Best deal on'"
      :subTitle="'Smartphone'"
    ></product-category>
    <product-category
      :title="'Shop from '"
      :subTitle="'Laptops Categories'"
    ></product-category>
    <product-category
      :title="'Top '"
      :subTitle="'Electronics'"
    ></product-category>
    <product-category
      :title="'Recent Women '"
      :subTitle="'Clothing'"
    ></product-category>
    <product-category
      :title="'Recently added'"
      :subTitle="'Funitures'"
    ></product-category>
  </div>

  <footer></footer>
</template>

<script>
import HeroSlider from '@/components/HeroSlider.vue'
import ProductCategory from '@/components/ProductCategory.vue'

export default {
  components: {
    HeroSlider,
    ProductCategory,
  },
  created() {
    window.screenTop = 0
  },
}
</script>

<style></style>
