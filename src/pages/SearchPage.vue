<template>
  <div v-if="searchType.key.includes('People')">
    <h3>People</h3>
    <ProfileCardList />
  </div>
  <div v-if="searchType.key.includes('Posts')">
    <h3>Posts</h3>
    <PostCardList />
  </div>


</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import ProfileCardList from '../components/ProfileCardList.vue';
import PostCardList from '../components/PostCardList.vue';
import { searchService } from '../services/SearchService.js';
import { useRoute } from 'vue-router';

export default {
  setup(){
    let route = useRoute()

    async function search() {
      const searchType = searchService.getSearchType()
      const searchString = route.params.queryString
      searchService.setSearchString(searchString)
      try {
        if(searchString && searchType.includes('People')) {
          await searchService.searchPeople(searchString)
        }
        if(searchString && searchType.includes('Posts')) {
          await searchService.searchPosts(searchString)
        }
      } catch (error) {
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      search()  
    })
    
    return {
      searchType: ref(AppState.searchType),
      people: computed(() => AppState.profiles)
    }
  },
  components: { ProfileCardList, PostCardList }

}
</script>


<style lang="scss" scoped>

</style>