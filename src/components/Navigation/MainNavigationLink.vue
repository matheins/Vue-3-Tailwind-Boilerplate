<template>
  <router-link
    :key="name"
    :to="to"
    v-slot="{ isExactActive, href, navigate }"
    custom
  >
    <a
      :active="isExactActive"
      :href="href"
      :class="[
        isExactActive
          ? 'border-primary text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
      ]"
      :aria-current="isExactActive ? 'page' : undefined"
      @click="navigate"
      >{{ name }}</a
    >
  </router-link>
</template>

<script>
export default {
  name: "MainNavigationLink",
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    current: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
