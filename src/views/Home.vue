<template>
  <div class="home">
    <PostsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostsList from '@/components/PostsList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    PostsList,
  },
})
</script>
