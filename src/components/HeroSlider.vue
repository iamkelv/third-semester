<template>
  <Carousel class="mt-3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item relative">
        <img :src="`${slide.src}`" class="absolute h-full tablet:h-auto" />
        <div class="z-10 grid grid-cols-2 relative justify-start w-full">
          <span
            class="flex flex-col ml-12 items-start justify-start gap-1 tablet:gap-2"
          >
            <h1 class="text-[1.2rem] font-semibold tablet:text-3xl">
              Best Deal Online on Smart watches
            </h1>
            <span class="hidden tablet:flex tablet:text-5xl">
              SMART WEARABLE.
            </span>
            <span class="text-sm target:text-lg">UP to 80% OFF</span>
          </span>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
// import img1 from '../assets/img/img1.jpg'
// import img2 from '../assets/img/img2.jpg'
// import img3 from '../assets/img/img3.jpg'
// import img4 from '../assets/img/img4.jpg'
import bg1 from '../assets/img/bg1.png'

export default defineComponent({
  name: 'BasicSlide',
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'Vue 3 Introduction',
          content: 'VueJS is a library',
          src: bg1,
        },
        {
          id: 2,
          title: 'Vue 3 Introduction',
          content: 'VueJS is a library',
          src: bg1,
        },
        {
          id: 3,
          title: 'Vue 3 Introduction',
          content: 'VueJS is a library',
          src: bg1,
        },
      ],
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
