<template>
  <div v-if="profile">
    <p>{{ profile.name }}</p>
  </div>
  <div v-for="post in posts" :key="post.id" class="mb-3">
    <PostCard :post="post" />
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import { postsService } from '../services/PostsService.js';
import PostCard from '../components/PostCard.vue';

export default {
  setup(){
    const route = useRoute()
    async function getProfile() {
      try {
        await profilesService.getProfileById(route.params.profileId)
      } catch (error) {
        Pop.error(error.message)
      }
    }
    async function getPosts() {
      try {
        await postsService.getPostsByProfileId(route.params.profileId)
      } catch (error) {
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getProfile()
      getPosts()
    })

    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts)
    }
  },
  components: { PostCard }
}
</script>


<style lang="scss" scoped>

</style>