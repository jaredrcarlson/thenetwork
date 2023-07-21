<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10 d-flex justify-content-between">
      <div>
        <button @click="getNewerPosts" :disabled="currPage < 2" class="btn btn-secondary">Newer</button>
      </div>
      <p v-if="numPages">{{ currPage }} / {{ numPages }}</p>
      <div>
        <button @click="getOlderPosts" :disabled="currPage == numPages" class="btn btn-secondary">Older</button>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
  <div class="row">
    <div class="col-12 my-3" v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import PostCard from '../components/PostCard.vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';
import { useRoute } from 'vue-router';

export default {
  setup(){
    const route = useRoute()    
    async function getPosts(page, profileId) {
      try {
          await postsService.getPosts(page, profileId)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    async function getNewerPosts() {
      await getPosts(AppState.postsCurrentPage - 1, route.params.profileId)
    }
    async function getOlderPosts() {
      await getPosts(AppState.postsCurrentPage + 1, route.params.profileId)
    }
    async function init() {
      if(route.params.profileId) {
        postsService.resetPostsPages()
      }
      await getPosts(AppState.postsCurrentPage, route.params.profileId)
    }

    onMounted(init)

    return {
      posts: computed(() => AppState.posts),
      currPage: computed(() => AppState.postsCurrentPage),
      numPages: computed(() => AppState.postsTotalPages),
      getNewerPosts,
      getOlderPosts
    }
  },
  components: { PostCard }

}
</script>


<style lang="scss" scoped>

</style>