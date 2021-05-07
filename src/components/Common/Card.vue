<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="w-full flex items-center justify-between p-6 space-x-6">
    <div class="flex-1 truncate">
      <div class="flex items-center space-x-3">
        <h3 class="text-gray-900 text-sm font-medium truncate">
          {{ title }}
        </h3>
      </div>
      <p class="mt-1 text-gray-500 text-sm truncate">{{ body }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
})
</script>
