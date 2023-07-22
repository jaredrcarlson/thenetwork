<template>
  <div class="card elevation-3">
    <div class="card-header">
      
      <div class="row">
        <div class="col-12 d-flex justify-content-end">
          <p class="card-subtitle text-muted"><small>{{ post.createdAt.toLocaleDateString() }}</small></p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-12 d-flex align-items-center justify-content-between">

          <div class="mb-2 d-flex align-items-center">
            <router-link :to="{name: 'Profile', params: {profileId: post.creator.id}}">
              <img class="creator-img" :src="post.creator.picture" :alt="post.creator.name" :title="post.creator.name">
            </router-link>
            <div class="ms-4 d-flex-column">
              <h4 class="card-title">{{ post.creator.name }}</h4>
            </div>
          </div>
    
          <!-- <div class="d-flex align-items-center">
            <p class="my-0 mx-2 fs-4">{{ post.numLikes }}</p>
            <i class="mdi mdi-heart fs-3"></i>
          </div> -->

        </div>
      </div>
    </div>
    
    <div class="card-body">
      <p class="card-text">{{ post.body }}</p>
    </div>

    <img v-if="post.imgUrl" :src="post.imgUrl" class="img-fluid">

    <div class="card-footer">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <button v-show="post.creatorId == account.id" class="btn btn-danger">DELETE</button>
        </div>
        <div class="d-flex align-items-center">
          <i class="mdi mdi-heart fs-3"></i>
          <i class="mdi mdi-heart-outline fs-3"></i>
          <p class="my-0 mx-2 fs-4">{{ post.numLikes }}</p>
        </div>

      </div>
    </div>
      
  </div>
</template>


<script>
import { computed } from 'vue';
import { Post } from '../models/Post.js';
import { AppState } from '../AppState.js';

export default {
  props: {
    post: {type: Post, required: true}
  },

  setup(){
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.creator-img {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>