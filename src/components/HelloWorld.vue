<template>
  <div class="px-4 py-8 sm:px-0">
    <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    function buttonClicked() {
      console.log("clicked");
    }

    return { buttonClicked };
  },
});
</script>
