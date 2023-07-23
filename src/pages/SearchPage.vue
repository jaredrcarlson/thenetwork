<template>
  <div class="mb-3">
    <h3>People</h3>
    <div v-if="people.length">
      <ProfileCardList />
    </div>
    <div v-else>
      <div class="ms-4 fs-5 text-muted">0 Results</div>
    </div>
  </div>
  <div>
    <h3>Posts</h3>
      <SearchPostCardList />
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue';
import { AppState } from '../AppState.js';
import ProfileCardList from '../components/ProfileCardList.vue';
import SearchPostCardList from '../components/SearchPostCardList.vue';

export default {
  setup(){
    // onMounted(() => {
    //   console.log('SearchPage > Mounted')
    // })

    // onUnmounted(() => {
    //   console.log('SearchPage > Unmounted')
    // })
    
    // onUpdated(() => {
    //   console.log('SearchPage > Updated')
    // })
    
    return {
      people: computed(() => AppState.profiles),
    }
  },
  components: { ProfileCardList, SearchPostCardList }

}
</script>


<style lang="scss" scoped>

</style>