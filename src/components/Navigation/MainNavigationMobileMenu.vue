<template>
  <DisclosurePanel class="sm:hidden" static>
    <div class="pt-2 pb-3 space-y-1">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        v-slot="{ isExactActive, href, navigate }"
        custom
      >
        <a
          :key="item.name"
          :href="href"
          :class="[
            isExactActive
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
          ]"
          :aria-current="isExactActive ? 'page' : undefined"
          @click="navigate"
        >
          {{ item.name }}
        </a>
      </router-link>
    </div>
  </DisclosurePanel>
</template>

<script>
export default {
  name: "MainNavigationMobileMenu",
  props: {
    navigation: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
