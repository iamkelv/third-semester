<template>
  <div
    class="grid mb-[2rem] gap-2 grid-cols-1 tablet:grid-cols-2 w-full relative my-2 bg-[#FDFDFD] shadow-2xl rounded-lg drop-shadow-xl overflow-auto top-10 tablet:top-0"
  >
    <div class="flex justify-center items-center rounded-lg p-2">
      <img
        :src="images"
        alt=""
        class="cursor-zoom-in max-w-[200px] -rotate-45 hover:scale-125 transition-all max-h-[500px]"
      />
    </div>
    <div class="flex flex-col gap-3 max-w-[70%] w-full mx-auto mt-[15%]">
      <span class="flex flex-col">
        <span class="font-bold text-4xl">{{ getProduct.title }}</span>
        <span class="font-semilight">Category: {{ getProduct.category }}</span>
      </span>
      <span class="flex flex-col">
        <span class="font-bold">Price: ${{ getProduct.price }}</span>
        <span class="font-light">
          Stock {{ getProduct.stock }}
          <br />
          (Also include all application duties)
        </span>
      </span>
      <span class="flex gap-2">
        <span
          class="flex cursor-pointer bg-[rgb(51,51,51)] w-[1.5rem] h-[1.5rem] rounded-full"
        ></span>
        <span
          class="flex cursor-pointer bg-[rgb(253,101,101)] w-[1.5rem] h-[1.5rem] rounded-full"
        ></span>
        <span
          class="flex cursor-pointer bg-[rgb(249,183,86)] w-[1.5rem] h-[1.5rem] rounded-full"
        ></span>
        <span
          class="flex cursor-pointer bg-[rgb(204,200,197)] w-[1.5rem] h-[1.5rem] rounded-full"
        ></span>
      </span>
      <span class="hidden tablet:flex flex-col">
        <span class="font-semibold">Selected size</span>
        <span class="grid grid-cols-3 gap-3 max-w-[50%]">
          <span
            v-for="select in [
              { id: 1, name: 'UK 2' },
              { id: 2, name: 'UK 4' },
              { id: 3, name: 'UK 5' },
              { id: 4, name: 'UK 6' },
              { id: 5, name: 'UK 7' },
            ]"
            :key="select.id"
            class="flex cursor-pointer items-center py-2 text-center justify-center px-3 bg-[rgb(241,240,240)] rounded-md shadow-xl drop-shadow-lg"
          >
            {{ select.name }}
          </span>
        </span>
      </span>
      <span class="flex flex-col max-w-[100%] w-full mx-auto gap-3">
        <button
          class="flex items-center py-3 text-center justify-center px-3 bg-[rgb(241,240,240)] font-semibold rounded-lg shadow-xl drop-shadow-lg"
        >
          Customise
          <fa-icon icon="fa-pen-to-square" />
        </button>
        <button
          @click="addToCart"
          class="flex items-center mb-4 py-3 text-center justify-center px-3 bg-[rgb(0,142,204)] text-white font-semibold rounded-lg shadow-xl drop-shadow-lg"
        >
          Add to Cart
        </button>
      </span>
    </div>
  </div>
  <div class="tablet:mb-6 flex flex-col my-[10%]">
    <product-category :title="'Related Products'"></product-category>
  </div>
</template>

<script>
// import RelatedProducts from '@/components/RelatedProducts.vue'
import img from '../assets/img/sneakers.png'
import ProductCategory from '@/components/ProductCategory.vue'

export default {
  components: {
    ProductCategory,
  },
  data() {
    return {
      img: img,
      image: null,
    }
  },
  computed: {
    getProduct() {
      return this.$store.getters.getSingleProduct
    },
    images() {
      let image = this.getProduct.images[0]
      return image
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => this.loadProduct(),
    )
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', {
        id: this.getProduct.id,
        title: this.getProduct.title,
        price: this.getProduct.price,
        qty: '2',
      })
    },
    loadProduct() {
      const { productId } = this.$route.params
      this.$store.dispatch('getSingleProduct', productId)
    },
  },

  async mounted() {
    this.loadProduct()
    const image = await this.getProduct.images[2]
    this.image = image
  },
}
</script>

<style></style>
