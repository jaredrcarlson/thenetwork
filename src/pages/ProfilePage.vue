<template>
    <div>
      <p>{{ profile.name }}</p>
    </div>
    <PostCardList />
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import PostCardList from '../components/PostCardList.vue';

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

    onMounted(() => {
      getProfile()
    })

    return {
      profile: computed(() => AppState.activeProfile)
    }
  },
  components: { PostCardList }
}
</script>


<style lang="scss" scoped>

</style>