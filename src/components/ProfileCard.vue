<template>
  <div class="card elevation-3">
    
    <div class="card-body">
      <div class="row my-1">
        <div class="col-12">
          <div class="d-flex align-items-center">
            <div>
              <router-link :to="{name: 'Profile', params: {profileId: profile.id}}">
                <img class="profile-img" :src="profile.picture" :alt="profile.name" :title="profile.name">
              </router-link>
            </div>
            <div class="ms-3 d-flex-column">
              <h3 class="my-1 card-title">{{ profile.name }}</h3>
              <h5 class="ms-1 card-subtitle text-muted"><i v-if="profile.graduated" class="mdi mdi-school me-2"></i>{{ profile.class }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</template>


<script>
import { Profile } from '../models/Profile.js';

export default {
  props: {
    profile: {type: Profile, required: true}
  },

  setup(){
    return {}
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

.pointer {
  cursor: pointer;
}
</style>