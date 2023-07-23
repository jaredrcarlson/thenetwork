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
            <form class="d-flex" @submit.prevent="search(searchString.key)">
              <input class="border-0 rounded-start bg-light form-control shadow-none" v-model="searchString.key" type="text" placeholder="Search">
              <div @click="search(searchString.key)" class="btn-custom border-0 rounded-end d-flex align-items-center bg-light"><i class="mdi mdi-magnify fs-5 mx-3"></i></div>
            </form>
          </div>
      </div>
      <div class="col-3">
      </div>
    </div>
  </header>

  <main class="container-fluid">
    <div class="row mt-3 gx-3">
      <div class="col-3">
        <div v-for="ad in adsEndHalf" :key="ad">
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
        <div v-for="ad in adsStartHalf" :key="ad">
          <a :href="ad.linkURL" target="blank">
            <div class="card elevation-3 mb-3">
              <img class="card-img" :src="ad.square" :alt="ad.title" :title="ad.title">
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { AppState } from './AppState';
import { adsService } from './services/AdsService.js';
import Pop from './utils/Pop.js';
import AccountCard from './components/AccountCard.vue';
import { router } from './router.js';
import { searchService } from './services/SearchService.js';

export default {
  setup() {
    async function getAds(count) {
      try {
        await adsService.getAds(count)
      } catch (error) {
        Pop.error(error.message)  
      }
    }
    async function search(searchString) {
      if(searchString == '') {
        Pop.toast('Search string required', 'info')
        return
      }
      try {
        router.push({name: 'Search', params: { queryString: searchService.getSearchString() }})
        await searchService.search(searchString)
        searchService.clearSearchString()
      } catch (error) {
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getAds(20)
      console.log('App > Mounted')

    })

    onUnmounted(() => {
      console.log('App > Unmounted')
    })

    onUpdated(() => {
      console.log('App > Updated')
    })

    return {
      // AppState: computed(() => AppState),
      ads: AppState.ads,
      adsReversed: computed(() => AppState.ads.slice().reverse()),
      adsStartHalf: computed(() => AppState.ads.slice(0, AppState.ads.length/2)),
      adsEndHalf: computed(() => AppState.ads.slice(AppState.ads.length/2)),
      // searchType: AppState.searchType,
      searchString: AppState.searchString,
      // nextSearchType: () => {
      //   searchService.nextSearchType()
      // },
      search
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
