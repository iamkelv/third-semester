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
    <div class="w-full flex">
      <div
        class="grid grid-cols-2 tablet:grid-cols-2 px-8 items-center justify-center"
      >
        <span class="flex items-center flex-col justify-between px-7">
          <fa-icon icon="fa-sharp fa-xmark" class="cursor-pointer" />
          <img :src="img" alt="" class="max-w-[40%]" />
          <span>Nike Airmax 270 react</span>
        </span>

        <span class="grid grid-cols-1 tablet:grid-cols-3 items-center">
          <span>$998</span>
          <span class="flex items-center gap-1 w-fit justify-between">
            <button class="bg-[rgb(5,171,243)] text-white flex px-3 rounded-md">
              -
            </button>
            <input
              type="text"
              class="max-w-[2rem] text-center items-center justify-items-center outline-none flex mx-auto"
              value="1"
            />
            <button
              class="bg-[rgb(5,171,243)] text-white flex px-3 rounded-md items-center justify-items-center"
            >
              +
            </button>
          </span>
          <span>$499</span>
        </span>
      </div>
    </div>

    <div class="flex justify-between items-start">
      <span class="">
        <span class="flex rounded-md border border-solid border-gray-400">
          <input
            type="text"
            class="flex outline-none border-none p-3"
            placeholder="Vourcher Code"
          />
          <span
            class="bg-[rgb(5,171,243)] text-white font-semibold cursor-pointer p-3 h-full"
          >
            Redeem
          </span>
        </span>
      </span>
      <span
        class="w-full max-w-[50%] justify-end items-end ml-0 flex flex-col gap-3"
      >
        <span class="flex flex-col gap-3 justify-between w-[50%]">
          <span class="flex justify-between items-center">
            <span>Subtotal</span>
            <span>$998</span>
          </span>
          <span class="flex justify-between items-center">
            <span>Shpping fee</span>
            <span>$20</span>
          </span>
          <span class="flex justify-between items-center">
            <span>Coupon</span>
            <span>No</span>
          </span>
          <span
            class="flex text-2xl font-bold mt-6 justify-between items-center"
          >
            <span class="">Total</span>
            <span>$45343</span>
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
  <paystack
    :amount="amount * 100"
    :email="email"
    :paystackkey="'PUBLIC_KEY'"
    :reference="reference"
    :callback="processPayment"
    :close="close"
  >
    Make Payment
  </paystack>
</template>

<script>
import sneakers from '../assets/img/sneakers.png'

export default {
  data() {
    return {
      img: sneakers,
    }
  },
}
</script>

<style></style>
