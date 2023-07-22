<template>
    <div class="card elevation-3 mb-4">
      <div class="card-body">
        <div class="d-flex-column">

          <div class="mb-2 text-center">
            <Login />
          </div>
          <div v-if="account.id" class="mb-3">
            <h4 class="my-1 card-title">{{ account.name }}</h4>
            <h6 class="ms-1 card-subtitle text-muted">{{ account.class }}class</h6>
          </div>

          <div v-if="account.github" class="d-flex align-items-center">
            <i class="me-2 mdi mdi-github fs-4"></i>
            <p>{{ account.github }}</p>
          </div>

          <div v-if="account.linkedin" class="d-flex align-items-center">
            <i class="me-2 mdi mdi-linkedin fs-4"></i>
            <p>{{ account.linkedin }}</p>
          </div>

          <div v-if="account.resume" class="mb-3 d-flex align-items-center">
            <i class="me-2 mdi mdi-file-account fs-4"></i>
            <p>{{ account.resume }}</p>
          </div>

        </div>
      </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import Login from './Login.vue';

export default {
  setup(){
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.account)
    }
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>
p {
  margin: 0;
}
</style>