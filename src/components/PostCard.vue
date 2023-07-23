<template>
  <div class="card elevation-3">
    <div class="card-header">
      <div class="row my-1">
        <div class="col-12 d-flex align-items-top justify-content-between">

          <div class="d-flex align-items-center">
            <router-link :to="{name: 'Profile', params: {profileId: post.creator.id}}">
              <img class="creator-img" :src="post.creator.picture" :alt="post.creator.name" :title="post.creator.name">
            </router-link>
            <div class="ms-4 d-flex-column">
              <h4 class="card-title">{{ post.creator.name }}</h4>
            </div>
          </div>

          <small class="card-subtitle text-muted">{{ post.createdAt.toLocaleDateString() }}</small>
    
        </div>
      </div>
    </div>
    
    <div class="card-body bg-light">
      <p class="card-text">{{ post.body }}</p>
    </div>

    <img v-if="post.imgUrl" :src="post.imgUrl" class="img-fluid">

    <div class="card-footer">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div v-if="account.id" @click="toggleLike" class="fs-3">
            <i v-if="post.likeIds.includes(account.id)" class="mdi mdi-heart pointer"></i>
            <i v-else class="mdi mdi-heart-outline pointer"></i>
          </div>
          <div>
            <small v-if="post.numLikes == 1" class="ms-1 text-muted">{{ post.numLikes }} Like</small>
            <small v-else class="ms-1 text-muted">{{ post.numLikes }} Likes</small>
          </div>
        </div>  
        
        <div v-if="post.creatorId == account.id" class="btn-custom text-danger" @click="deletePost">
          <i class="mdi mdi-delete-circle-outline fs-2"></i>
        </div>
      </div>
    </div>
      
  </div>
</template>


<script>
import { computed } from 'vue';
import { Post } from '../models/Post.js';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    post: {type: Post, required: true}
  },

  setup(props){
    return {
      account: computed(() => AppState.account),
      toggleLike: async() => {
        try {
          await postsService.toggleLike(props.post.id)
        } catch (error) {
          Pop.error(error.message)
        }
      },
      deletePost: async() => {
        const confirmed = await Pop.confirm()
        if(!confirmed) {
          return
        }
        try {
          await postsService.deletePost(props.post.id)
          Pop.success()
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.creator-img {
  height: 10vh;
  width: 10vh;
  border-style: solid;
  border-width: 2px;
  border-color:black;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.pointer {
  cursor: pointer;
}
</style>