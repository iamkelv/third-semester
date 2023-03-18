<template>
  <div
    class="flex flex-col h-auto mb-5 gap-5 overflow-y-auto mt-32 tablet:mt-8"
  >
    <div class="hidden tablet:grid grid-cols-2 font-bold px-8">
      <span>PRODUCT</span>

      <span class="grid grid-cols-3">
        <span>PRICE</span>
        <span>QTY</span>
        <span>UNIT PRICE</span>
      </span>
    </div>
    <div class="w-full flex" v-for="cart in getAllCarts" :key="cart.id">
      <div
        class="grid grid-cols-2 tablet:grid-cols-2 px-8 items-center justify-center"
      >
        <span
          class="flex w-full items-center flex-col tablet:flex-row justify-between px-7"
        >
          <fa-icon
            icon="fa-sharp fa-xmark"
            class="cursor-pointer hidden table:flex"
          />
          <img :src="img" alt="" class="tablet:max-w-[40%] max-w-[100%]" />
          <span class="hidden tablet:flex">{{ cart.title }}</span>
        </span>

        <span class="grid grid-cols-1 tablet:grid-cols-3 items-center">
          <span class="">${{ getPrice }}</span>
          <span class="">
            {{ qyt }}
          </span>
          <span class="flex items-center gap-1 w-fit justify-between">
            <button
              @click="decrease"
              class="bg-[rgb(5,171,243)] text-white flex px-3 rounded-md"
            >
              -
            </button>
            <input
              type="text"
              class="max-w-[2rem] text-center items-center justify-items-center outline-none flex mx-auto"
              :value="value"
            />
            <button
              @click="increase"
              class="bg-[rgb(5,171,243)] text-white flex px-3 rounded-md items-center justify-items-center"
            >
              +
            </button>
          </span>
        </span>
      </div>
    </div>

    <div class="flex tablet:flex-row flex-col justify-between items-start">
      <span class="w-full">
        <form @submit.prevent>
          <span class="flex rounded-md border border-solid border-gray-400">
            <input
              type="text"
              class="flex outline-none w-full tablet:w-[100%] border-none p-3"
              placeholder="Vourcher Code"
              required
            />
            <button
              @click="redeemVourcher"
              class="bg-[rgb(5,171,243)] text-white font-semibold cursor-pointer p-3 h-full"
            >
              Redeem
            </button>
          </span>
          <p
            v-if="getVourcher"
            class="text-red-500 ease-out duration-300 py-2 font-bold mt-2"
          >
            Invalid Vourcher
          </p>
        </form>
      </span>
      <span
        class="w-full mt-3 px-5 tablet:max-w-[50%] justify-end items-end ml-0 flex flex-col gap-3"
      >
        <span class="flex flex-col gap-3 justify-between w-[50%]">
          <span class="flex justify-between items-center">
            <span>Subtotal</span>
            <span>${{ subTotal }}</span>
          </span>
          <span class="flex justify-between items-center">
            <span>Shpping fee</span>
            <span>${{ fee }}</span>
          </span>
          <span class="flex justify-between items-center">
            <span>Coupon</span>
            <span>No</span>
          </span>
          <span
            class="flex text-2xl font-bold mt-6 justify-between items-center"
          >
            <span class="">Total</span>
            <span>${{ total }}</span>
          </span>
          <span
            class="flex text-lg font-bold mt-6 justify-between items-center"
          >
            <button
              class="bg-[rgb(5,171,243)] text-white w-full p-2 rounded-md"
            >
              Check out
            </button>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import sneakers from '../assets/img/sneakers.png'

export default {
  data() {
    return {
      img: sneakers,
      value: 1,
      price: 200,
      qyt: 1,
      fee: 200,
      isInvalid: false,
    }
  },

  methods: {
    increase() {
      this.value = this.value + 1
      this.qyt = this.qyt + 1
      this.fee = this.fee + 2
    },
    redeemVourcher() {
      this.isInvalid = true
      setTimeout(() => {
        this.isInvalid = false
      }, 3000)
    },
    decrease() {
      if (this.value < 2) {
        return this.value
      }
      this.value = this.value - 1
      this.qyt = this.qyt - 1
    },
  },
  computed: {
    getPrice() {
      return this.price * this.qyt
    },
    getAllCarts() {
      return this.$store.getters.getAllCarts
    },
    getVourcher() {
      return this.isInvalid
    },
    itemQty() {
      return 1
    },
    subTotal() {
      return this.price * this.qyt
    },
    getFee() {
      return this.fee
    },
    total() {
      return this.subTotal + this.fee
    },
  },
}
</script>

<style></style>
