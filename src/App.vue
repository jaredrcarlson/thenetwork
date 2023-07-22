<template>
  <header>
    <div class="container-fluid">
      <div class="row mb-3">
        <div class="col-12 bg-dark">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
  <main>
      <div class="container px-5">
        <div class="row gx-3">
          <div class="col-3">
              <AccountCard />
          </div>
          <div class="col-7">
              <router-view />
          </div>
          <div class="col-2">
            <div>
              <div v-for="ad in ads" :key="ad">
                <img class="img-fluid mb-3 elevation-3" :src="ad.tall" :alt="ad.title" :title="ad.title">
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import { adsService } from './services/AdsService.js';
import Pop from './utils/Pop.js';
import Navbar from './components/Navbar.vue';
import AccountCard from './components/AccountCard.vue';

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
      ads: computed(() => AppState.ads)
    }
  },
  components: {
    Navbar, AccountCard
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
