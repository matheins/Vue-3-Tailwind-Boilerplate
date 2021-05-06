<template>
  <div class="min-h-screen bg-white">
    <MainNavigation />
    <div class="py-10">
      <main>
        <div class="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
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
};
</script>
