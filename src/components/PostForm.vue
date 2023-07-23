<template>
  <div class="card elevation-3">
    <div class="card-body">
      <div class="row justify-content-between">
        <div class="col-2 d-flex justify-content-center">
          <img class="creator-img" :src="account.picture" :alt="account.name" :title="account.name">
        </div>
        <div class="col-10">
          <textarea v-model="post.body" class="mb-2 pb-2 form-control" rows="3" required></textarea>
          <div class="row">
            <div class="col-10">
              <div class="my-0 ps-2 form-text">Image URL</div>
              <input v-model="post.imgUrl" type="url" class="form-control ">
            </div>
            <div class="col-2">
                <div class="pt-2 btn-custom" @click="createPost">
                  <i class="mdi mdi-send-circle-outline fs-1"></i>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';

export default {
  setup(){
    return {
      account: computed(() => AppState.account),
      post: computed(() => AppState.newPost),
      // ref(AppState.newPost),
      createPost: async() => {
        try {
          if(AppState.newPost.body == '') {
            Pop.toast('Post body cannot be empty', 'error')
            return
          } 
          await postsService.createPost()
          postsService.clearForm()
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
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>