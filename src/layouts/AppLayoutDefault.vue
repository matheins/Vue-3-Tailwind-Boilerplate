<template>
  <div class="min-h-screen bg-white">
    <MainNavigation />
    <div class="py-10">
      <header v-if="this.$route.meta.title">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            {{ this.$route.meta.title }}
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import MainNavigation from "@/components/Navigation/MainNavigation.vue";
export default {
  components: { MainNavigation },
  name: "DefaultLayout",
  props: {
    title: {
      type: String,
    },
  },
};
</script>
