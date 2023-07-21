<template>
  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center"> -->
    <!-- <div class="home-card p-5 bg-white rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
    </div> -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-5" v-for="post in posts" :key="post.id">
            <PostCard :post="post" />
        </div>
      </div>
    </div>
    
  <!-- </div> -->
</template>

<script>
import { computed, onMounted } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getPosts()
    })

    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
