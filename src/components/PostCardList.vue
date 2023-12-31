<template>
  <div v-if="!posts.length">
    <div class="ms-4 fs-5 text-muted">0 Results</div>
  </div>
  <div>
    <div class="card mb-2 bg-light">
      <div class="row pt-1 text-muted d-flex align-items-center">
        <div class="col-4">
          <div v-if="currPage > 1">
            <div @click="getNewerPosts" class="ms-4 d-flex flex-column align-items-start justify-content-center">
              <div class="fw-bold">Newer</div>
              <i class="fs-1 mdi mdi-chevron-left-circle-outline custom-btn"></i>
            </div>
          </div>
        </div>
        <div class="col-4" align="center">
          <div class="me-4 d-flex flex-column justify-content-between">
              <div class="pb-1 fw-bold">Page</div>
              <div class="pb-2 fs-5 font-monospace">{{ currPage }} / {{ numPages }}</div>
          </div>
        </div>
        <div class="col-4">
          <div v-if="currPage < numPages">
            <div @click="getOlderPosts" class="me-4 d-flex flex-column align-items-end justify-content-center">
              <div class="fw-bold">Older</div>
              <i class="fs-1 mdi mdi-chevron-right-circle-outline custom-btn"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-3" v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
      </div>
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
.custom-btn:hover {
  cursor: pointer;
}
</style>