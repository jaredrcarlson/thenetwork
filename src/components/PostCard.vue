<template>
  <div class="card">
    <div class="card-header d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <router-link :to="{name: 'Profile', params: {profileId: post.creator.id}}">
          <img class="creator-img" :src="post.creator.picture" :alt="post.creator.name" :title="post.creator.name">
        </router-link>
        <div class="ms-5 d-flex-column">
          <h4 class="card-title">{{ post.creator.name }}</h4>
          <h5 class="card-subtitle text-muted">{{ post.createdAt.toLocaleDateString() }}</h5>
        </div>
      </div>
      <div>
        <p>{{ post.numLikes }}<i class="mdi mdi-heart fs-1"></i></p>
      </div>
    </div>

    <div class="card-body">
      <p class="card-text">{{ post.body }}</p>
    </div>
    
    <img v-if="post.imgUrl" :src="post.imgUrl" class="card-img-bottom post-img">
</div>
</template>


<script>
import { Post } from '../models/Post.js';

export default {
  props: {
    post: {type: Post, required: true}
  },

  setup(){
    return {
      
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
.post-img {
  height: 20vh;
  object-fit: cover;
  object-position: center;
}
</style>