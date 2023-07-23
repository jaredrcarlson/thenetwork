<template>
  <div class="row">
    <div class="col-12 mb-3" v-for="profile in profiles" :key="profile.id">
      <ProfileCard :profile="profile" />
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import ProfileCard from '../components/ProfileCard.vue';
import { AppState } from '../AppState.js';

export default {
  setup(){
    return {
      profiles: computed(() => AppState.profiles)
    }
  },
  components: { ProfileCard }
}
</script>


<style lang="scss" scoped>

</style>