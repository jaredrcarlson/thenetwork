<template>
  <div v-if="profile">
    <div class="card elevation-3 mb-4">
      <img :src="profile.coverImg" class="card-img-top">
      <div class="card-body">
        <div>

          <div class="mb-3 d-flex align-items-center justify-content-between">

            <div class="d-flex align-items-center">
              <div class="me-4">
                <img class="profile-img" :src="profile.picture" :alt="profile.name" :title="profile.name">
              </div>
              <div>
                <h4 class="my-1 card-title">{{ profile.name }}</h4>
                <h6 class="ms-1 card-subtitle text-muted">{{ profile.class }}</h6>
              </div>
            </div>

            <div class="d-flex">
                <div v-if="profile.github">
                  <a :href="profile.github" target="_blank">
                    <i class="mdi mdi-github fs-1"></i>
                  </a>
                </div>
                <div v-if="profile.linkedin" class="mx-3">
                  <a :href="profile.linkedin" target="_blank">
                    <i class="mdi mdi-linkedin fs-1"></i>
                  </a>
                </div>
                <div v-if="profile.resume">
                  <a :href="profile.resume" target="_blank">
                    <i class="mdi mdi-file-account fs-1"></i>
                  </a>
                </div>
            </div>

          </div>
          
          <div class="card-text mb-3 mx-2">
            <em class="">{{ profile.bio }}</em>
          </div>
          
          <div v-if="profile.id == account.id" class="d-flex justify-content-end">
            <button class="btn btn-info">Edit</button>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup(){
    return {
      profile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
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