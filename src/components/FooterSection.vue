<template>
  <footer class="px-[10%] bg-[#05ABF3] p-5 text-white">
    <span class="hidden tablet:grid grid-cols-3 h-[50vh]">
      <span class="flex flex-col gap-5">
        <span class="text-[1.5rem] font-bold font-sans">MegaMart</span>
        <span class="flex flex-col gap-2">
          <span class="flex flex-col gap-1">
            <span class="font-bold">Contact Us</span>
            <span class="flex flex-col gap-2">
              <span class="flex flex-col">
                <span class="flex gap-2 items-center">
                  <fa-icon icon="fa-brands fa-whatsapp" />
                  <span>Whatsapp</span>
                </span>
                <span>+234 8060683423</span>
              </span>
              <span class="flex flex-col">
                <span class="flex gap-2 items-center">
                  <fa-icon icon="fa-solid fa-phone" />
                  <span>Call Us</span>
                </span>
                <span>+234 8060683423</span>
              </span>
            </span>
          </span>
          <span class="flex flex-col gap-1">
            <span class="font-bold">Download App</span>
            <span class="flex flex-col gap-2">
              <span class="flex flex-col">
                <img :src="img" alt="" />
              </span>
            </span>
          </span>
        </span>
      </span>
      <span>
        <span
          class="flex items-center font-bold border-[2px] pb-1 border-solid border-b-white-400 border-t-0 border-x-0 w-[80%]"
        >
          Most Popular Categories
        </span>
        <span>
          <u class="flex flex-col gap-2 mt-6">
            <li
              v-for="item in [
                'Women',
                'Men Clothing',
                'Electronics',
                'Fashion',
                'Furniture',
              ]"
              :key="item"
            >
              <router-link to="/">{{ item }}</router-link>
            </li>
          </u>
        </span>
      </span>
      <span>
        <span
          class="flex items-center font-bold border-[2px] pb-1 border-solid border-b-white-400 border-t-0 border-x-0 w-[80%]"
        >
          Customer Services
        </span>
        <span>
          <u class="flex flex-col gap-2 mt-6">
            <li
              v-for="item in [
                'About Us',
                'Terms & Conditions',
                'FAQ',
                'Privacy Policy',
                'Cancellation & Return Policy ',
              ]"
              :key="item"
            >
              <router-link to="/">{{ item }}</router-link>
            </li>
          </u>
        </span>
      </span>
    </span>
    <hr />
    <span
      class="flex text-center text-white font-semibold items-center justify-center"
    >
      <span>
        @ 2023 All right reserved.
        <router-link to="https://iamkelv.vercel.app/">Kelvin Moses</router-link>
      </span>
    </span>
    <span class="fixed z-50 flex tablet:hidden">
      <mobile-footer></mobile-footer>
    </span>
  </footer>
</template>

<script>
import download from '../assets/img/download.png'
import MobileFooter from './MobileFooter.vue'
export default {
  components: {
    MobileFooter,
  },
  data() {
    return {
      img: download,
    }
  },
}
</script>

<style></style>
