<template>
    <ProfileDetails />
    <PostCardList />
</template>


<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';
import PostCardList from '../components/PostCardList.vue';
import ProfileDetails from '../components/ProfileDetails.vue';

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

    return {}
  },
  components: { ProfileDetails, PostCardList }
}
</script>


<style lang="scss" scoped>

</style>