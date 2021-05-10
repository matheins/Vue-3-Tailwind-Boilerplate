<template>
  <section id="posts">
    <div
      class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"
    >
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ $t('views.home.posts.headline') }}
      </h3>
      <div class="mt-3 flex sm:mt-0 sm:ml-4">
        <v-button minimal @click="reset">{{
          $t('views.home.posts.button.reset')
        }}</v-button>
        <v-button class="ml-3" @click="fetchPosts">{{
          $t('views.home.posts.button.reload')
        }}</v-button>
      </div>
    </div>
    <div class="mt-6">
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
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { Post } from '@/entities'

export default defineComponent({
  setup() {
    const store = useStore()

    // Fetch posts from api into store
    function fetchPosts() {
      store.dispatch('posts/fetch')
    }

    // Reset store
    function reset() {
      store.dispatch('reset')
    }

    // Triggers functions when component gets mounted
    onMounted(() => {
      fetchPosts()
    })

    // Returns posts from the store
    const posts = computed(() => {
      return store.getters['posts/getPosts']
    })

    // Returns posts from the store
    const postsLoading = computed(() => {
      return store.getters['posts/getLoading']
    })

    return { posts, reset, fetchPosts, postsLoading }
  },
})
</script>

<style scoped></style>
