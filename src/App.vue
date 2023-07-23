<template>
  <header class="container-fluid">
    <div class="row py-3 align-items-center topbar">
      <div class="col-3">
        <div class="ms-5">
          <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
            <img src="./assets/img/logo.png" alt="Logo" title="Home" height="30">
          </router-link>
        </div>
      </div>
      <div class="col-6 d-flex justify-content-end">
          <div class="d-flex border border-2 border-secondary rounded bg-light">
            <div @click="nextSearchType" class="btn-custom d-flex align-items-center border-0 rounded-start">
              <p class="ms-2 me-1 my-0">{{ searchType.key }}</p>
              <i class="mdi mdi-menu-swap fs-5"></i>
            </div>
            <input class="form-control rounded-0 border border-2 border-top-0 border-bottom-0 border-end-0 border-secondary" v-model="searchString.key" type="text" placeholder="Search">
            <div @click="search" class="btn-custom border-0 rounded-end d-flex align-items-center bg-light"><i class="mdi mdi-magnify fs-5 mx-2"></i></div>
          </div>
      </div>
      <div class="col-3">
      </div>
    </div>
  </header>

  <main class="container-fluid">
    <div class="row mt-3 gx-3">
      <div class="col-3">
        <div v-for="ad in ads" :key="ad">
          <a :href="ad.linkURL" target="blank">
            <div class="card elevation-3 mb-3">
              <img class="card-img" :src="ad.square" :alt="ad.title" :title="ad.title">
            </div>
          </a>
        </div>
      </div>
      <div class="col-6">
        <router-view :key="$route.fullPath"/>
      </div>
      <div class="col-3">
        <AccountCard />
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from './AppState';
import { adsService } from './services/AdsService.js';
import Pop from './utils/Pop.js';
import AccountCard from './components/AccountCard.vue';
import { router } from './router.js';
import { searchService } from './services/SearchService.js';
import { useRoute } from 'vue-router';

export default {
  setup() {
    async function getAds() {
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.error(error.message)  
      }
    }

    onMounted(() => {
        getAds()
    })

    return {
      AppState: computed(() => AppState),
      ads: computed(() => AppState.ads),
      searchType: ref(AppState.searchType),
      searchString: ref(AppState.searchString),
      nextSearchType: () => {
        searchService.nextSearchType()
      },
      search: () => {
        router.push({name: 'Search', params: { queryString: searchService.getSearchString() }})
      }
    }
  },
  components: { AccountCard }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

main {
  background-color: #fbfaf5;
}

.topbar {
  background-color: #d6d4c8;
}

.btn-custom:hover {
  cursor: pointer;
}
</style>
