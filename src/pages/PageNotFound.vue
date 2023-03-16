<template>
  <div class="bg-[#F3F3F3] grid grid-cols-2 h-[70vh] rounded-2xl mt-3 p-4">
    <span class="flex m-auto flex-col gap-2">
      <span class="font-black text-[3rem]">Oops....</span>
      <p class="flex text-[2rem] font-light">Page not found</p>
      <span>
        <router-link to="/">
          <button
            class="bg-[#008ECC] hover:bg-[#008fccb4] text-white px-4 py-2 rounded-md"
          >
            <fa-icon icon="fa-arrow-left" />
            Go Back
          </button>
        </router-link>
      </span>
    </span>

    <span><img :src="img" alt="" /></span>
  </div>
</template>

<script>
import notfound from '../assets/img/notfound.png'
export default {
  data() {
    return {
      img: notfound,
    }
  },
}
</script>

<style></style>
