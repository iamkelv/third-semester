<template>
  <div class="flex justify-between mt-6 w-[97%] text-[#666666]">
    <span
      class="flex items-center font-bold border-b-2 border-x-0 border-t-0 pr-9 pb-3 border-solid border border-[#008ECC] text-lg tablet:text-2xl font-mono gap-2"
    >
      {{ title }}
      <span class="text-[#008ECC] hidden tablet:flex">{{ subTitle }}</span>
    </span>
    <span>
      <router-link to="/" class="flex items-center gap-2">
        <span>View All</span>
        <fa-icon icon="fa-angle-right" class="text-[#008ECC]" />
      </router-link>
    </span>
  </div>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product.id}`">
        <div
          class="carousel__item flex flex-col relative bg-white text-[black] font-mono font-thin"
        >
          <span
            class="absolute bg-[#008ECC] p-1 mt-1 max-w-[3rem] -top-1 -right-[10%] rounded-full flex items-center"
          >
            <span class="text-[12px] text-white font-thin">65% OFF</span>
          </span>
          <span>
            <img :src="`${product.images[0]}`" alt="" class="max-w-[100px]" />
          </span>
          <span class="font-['HK Grotesk'] flex flex-col text-[12px]">
            <span>{{ product.title }}</span>
            <span>Price: ${{ product.price }}</span>
            <span>Stock: {{ product.stock }}</span>
          </span>
        </div>
      </router-link>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'BreakPoints',
  props: ['title', 'subTitle'],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
  },
  methods: {},
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },

    breakpoints: {
      // 700px and up
      300: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      // 700px and up
      700: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 6,
        snapAlign: 'start',
      },
    },
  }),
})
</script>
