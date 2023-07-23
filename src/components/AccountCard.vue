<template>
    <div class="card elevation-3 mb-4">
      <div class="card-body">
        <div class="d-flex-column">
          <div class="mb-2 text-center">
            <Login />
          </div>
          <div v-if="account.id" class="mb-3 d-flex align-items-center justify-content-around">
            <div>
              <h4 class="my-1 card-title">{{ account.name }}</h4>
              <h6 class="ms-1 card-subtitle text-muted">{{ account.class }}</h6>
            </div>
            <div v-if="account.graduated">
              <i class="mdi mdi-school fs-1"></i>
            </div>
          </div>
          <div v-if="account.id" class="d-flex align-items-center">
            <i class="me-2 mdi mdi-email fs-4"></i>
            <small>{{ account.email }}</small>
          </div>
          <div v-if="account.github" class="d-flex align-items-center">
            <i class="me-2 mdi mdi-github fs-4"></i>
            <a :href="account.github" target="blank">
              <small>{{ account.githubShort }}</small>
            </a>
          </div>
          <div v-if="account.linkedin" class="d-flex align-items-center">
            <i class="me-2 mdi mdi-linkedin fs-4"></i>
            <a :href="account.linkedin" target="blank">
              <small>{{ account.linkedinShort }}</small>
            </a>
          </div>
          <div v-if="account.resume" class="mb-3 d-flex align-items-center">
            <i class="me-2 mdi mdi-file-account fs-4"></i>
            <a :href="account.resume" target="blank">
              <small>{{ account.resumeShort }}</small>
            </a>
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
      account: computed(() => AppState.account)
    }
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>
p {
  margin: 0;
}

a:link {
  color: #000000;
}

/* visited link */
a:visited {
  color: #000000;
}

/* mouse over link */
a:hover {
  color: #000000;
}

/* selected link */
a:active {
  color: #000000;
}
</style>