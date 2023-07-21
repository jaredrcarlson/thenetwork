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
        <div class="row gx-5">
          <div v-if="appState.account.id" class="col-2">
            <div class="border border-danger">
              Profile
            </div>
          </div>
          <div class="col-8">
            <div class="border border-info">
              <router-view />
            </div>
          </div>
          <div class="col-2">
            <div class="">
              <div v-for="ad in ads" :key="ad">
                <img class="img-fluid mb-3" :src="ad.tall" :alt="ad.title" :title="ad.title">
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { adsService } from './services/AdsService.js'
import Pop from './utils/Pop.js'
import Navbar from './components/Navbar.vue'

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
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads)
    }
  },
  components: {
    Navbar
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
