<template>
  <span
    class="relative hidden tablet:flex w-full gap-3 mx-auto my-0 justify-center mt-2 flex-wrap"
  >
    <span
      :click="showOption"
      class="flex flex-col gap-2"
      v-for="menu in menus"
      :key="menu"
    >
      <span
        class="px-6 flex cursor-pointer max-w-fit p-2 bg-[rgb(0,142,204)] rounded-md items-center gap-3 align-middle text-white flex-wrap"
      >
        <span class="text-[16px]">{{ menu }}</span>
      </span>
    </span>
  </span>
</template>

<script>
export default {
  props: ['menus'],
  emits: ['option'],
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showOption(event) {
      this.show = event
    },
  },
}
</script>

<style></style>
