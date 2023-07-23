<template>
    <div v-if="user.isAuthenticated" class="mb-3">
      <PostForm />
    </div>
    <div v-else class="card elevation-3 mb-3">
      <a :href="randomAd?.linkURL" target="blank">
        <img class="card-img" :src="randomAd?.banner" :alt="randomAd?.title" :title="randomAd?.title">
      </a>
    </div>
    <PostCardList />
</template>

<script>
import PostCardList from '../components/PostCardList.vue';
import { computed, onMounted, onUnmounted, onUpdated } from 'vue';
import PostForm from '../components/PostForm.vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    
    onMounted(() => {
      console.log('HomePage > Mounted')
    })

    onUnmounted(() => {
      console.log('HomePage > Unmounted')
    })

    onUpdated(() => {
      console.log('HomePage > Updated')
    })

    return {
      user: computed(() => AppState.user),
      randomAd: computed(() => AppState.ads[Math.floor(Math.random()*AppState.ads.length)])
    }
  },
  components: { PostForm, PostCardList }
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
