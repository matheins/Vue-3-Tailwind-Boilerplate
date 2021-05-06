<template>
  <div v-if="loading">Loading...</div>
  <ul v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="post in posts"
      :key="post.id"
      class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <v-card :title="post.title" :body="post.body" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/entities";

export default defineComponent({
  props: {
    posts: {
      type: [] as PropType<Post[]>,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped></style>
