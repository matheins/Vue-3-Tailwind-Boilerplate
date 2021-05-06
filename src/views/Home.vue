<template>
  <div class="home">
    <section id="posts">
      <div
        class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between"
      >
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ $t("views.home.posts.headline") }}
        </h3>
        <div class="mt-3 flex sm:mt-0 sm:ml-4">
          <v-button @click="reset" minimal>{{
            $t("views.home.posts.button.reset")
          }}</v-button>
          <v-button class="ml-3" @click="fetchPosts">{{
            $t("views.home.posts.button.reload")
          }}</v-button>
        </div>
      </div>
      <div class="mt-6">
        <PostsList :posts="posts" :loading="postsLoading" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import PostsList from "@/components/PostsList.vue";

export default defineComponent({
  name: "Home",
  components: {
    PostsList,
  },
  setup() {
    const store = useStore();

    // Fetch posts from api into store
    function fetchPosts() {
      store.dispatch("posts/fetch");
    }

    // Reset store
    function reset() {
      store.dispatch("reset");
    }

    // Triggers functions when component gets mounted
    onMounted(() => {
      fetchPosts();
    });

    // Returns posts from the store
    const posts = computed(() => {
      return store.getters["posts/getPosts"];
    });

    // Returns posts from the store
    const postsLoading = computed(() => {
      return store.getters["posts/getLoading"];
    });

    return { posts, reset, fetchPosts, postsLoading };
  },
});
</script>
