<template>
  <div class="card elevation-3">
    <div class="card-body">
      <div class="row">
        <div class="col-2 d-flex justify-content-center">
          <img class="creator-img" :src="account.picture" :alt="account.name" :title="account.name">
        </div>
        <div class="col-10">
          <textarea v-model="post.body" class="mb-3 pb-2 form-control" rows="8"></textarea>
          <input v-model="post.imgUrl" type="url" class="form-control">
          <div class="my-0 ps-2 form-text">Image URL</div>
          <div class="d-flex justify-content-end">
            <button @click="createPost" class="btn btn-primary">CREATE POST</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';

export default {
  setup(){
    return {
      account: computed(() => AppState.account),
      post: ref(AppState.newPost),
      createPost: async() => {
        try {
          await postsService.createPost()
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
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>