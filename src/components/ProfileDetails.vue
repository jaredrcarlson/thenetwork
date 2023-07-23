<template>
  <div v-if="profile">
    <div class="card elevation-3 mb-4">
      <img :src="profile.coverImg" class="card-img-top">
      <div class="card-body">
        <div class="background-image">

          <div class="mb-3 d-flex align-items-center justify-content-between">

            <div class="d-flex align-items-center">
              <div class="me-4">
                <img class="profile-img" :src="profile.picture" :alt="profile.name" :title="profile.name">
              </div>
              <div>
                <h4 class="my-1 card-title">{{ profile.name }}</h4>
                <h6 class="ms-1 card-subtitle text-muted"><i v-if="profile.graduated" class="mdi mdi-school me-2"></i>{{ profile.class }}</h6>
              </div>
            </div>

            <div class="d-flex">
                <div v-if="profile.email" class="me-3">
                  <a :href="`mailto:${profile.email}`" target="_blank">
                    <i class="mdi mdi-email fs-1"></i>
                  </a>
                </div>
                <div v-if="profile.github" class="me-3">
                  <a :href="profile.github" target="_blank">
                    <i class="mdi mdi-github fs-1"></i>
                  </a>
                </div>
                <div v-if="profile.linkedin" class="me-3">
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
          
          <div class="card-text px-3 mb-3 mx-2">
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
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

a:link {
  color: #000000;
}

a:visited {
  color: #000000;
}

a:hover {
  color: #000000;
}

a:active {
  color: #000000;
}
</style>