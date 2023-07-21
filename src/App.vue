<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main>
    <div class="container-fluid">
      <div class="row mb-3">
        <div class="col-12 bg-dark">
          Search
        </div>
      </div>
    </div>
      <div class="container px-5">
        <div class="row gx-5">
          <div class="col-2">
            <div class="border border-danger">
              Profile
            </div>
          </div>
          <div class="col-8">
            <div class="border border-info">
              Content
              <router-view />

            </div>
  
          </div>
          <div class="col-2">
            <div class="border border-dark">
              Ads

            </div>
          </div>
        </div>

      </div>


  </main>
   <footer>
    <!-- Made with 💖 by CodeWorks -->
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
// import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    // Navbar
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
