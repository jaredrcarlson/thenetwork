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
        <div align="center" v-if="!user.isAuthenticated">
          <div class="my-2" @click="login" >
            <img class="img-fluid login-btn" src="./assets/img/login_button.png">
          </div>
        </div>
        <!-- <div v-else> 
          <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
            <i class="mdi mdi-logout"></i>
            Logout
          </div>
        </div> -->
        <div v-else > 
          <div class="my-2 d-flex btn-custom align-items-center justify-content-center" @click="logout">
            <i class="mdi mdi-logout fs-4"></i>
            <div class="ms-2">Logout</div>
          </div>
        </div>
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
        <div v-if="user.isAuthenticated">
          <AccountCard />
        </div>
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
import { AuthService } from './services/AuthService.js';

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
      // console.log('App > Mounted')
    })

    // onUnmounted(() => {
    //   console.log('App > Unmounted')
    // })

    // onUpdated(() => {
    //   console.log('App > Updated')
    // })

    return {
      // AppState: computed(() => AppState),
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },
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
  // background-color: #fbfaf5;
  background-color: rgba(255, 255, 0, 0.137);
}

.topbar {
  background-color: #5c57571a;
  // background-color: #ffe88134;

}

.btn-custom:hover {
  cursor: pointer;
}

.login-btn {
  height: 4vh;
}

.login-btn:hover {
  cursor: pointer;
}
</style>
