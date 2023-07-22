<template>
  <div class="card elevation-3">
  <div class="card-header">
    <div class="d-flex align-items-center justify-content-between">
      <div class="fs-4">Edit Account</div>
      <img class="profile-img" :src="temp.picture" :alt="temp.name" :title="temp.name">
    </div>

  </div>
  <div v-if="temp.id" class="card-body">
      <div class="row mb-3">
        <div class="my-0 ms-1 col-6 form-text">Name</div>
        <div class="my-0 col-6">
          <input v-model="temp.name" type="text" class="form-control">
        </div>

        <div class="my-0 col-6 d-flex align-items-center">
          <i class="mdi mdi-school fs-4"></i>
          <div class="ms-3 pe-2 form-text">Graduated</div>
          <input v-model="temp.graduated" type="checkbox" class="form-check-input">
        </div>

      </div>
          
    <div class="row">
      <div class="col-6">
        <div class="row mb-3 g-2 align-items-center">
          <div class="my-0 ps-2 col-12 form-text">Profile Image URL</div>
          <div class="my-0 col-12">
            <input v-model="temp.picture" type="url" class="form-control">
          </div>
        </div>
        <div class="row mb-3 g-2 align-items-center">
          <div class="my-0 ps-2 col-12 form-text">Cover Image URL</div>
          <div class="my-0 col-12">
            <input v-model="temp.coverImg" type="url" class="form-control">
          </div>
        </div>
        <div class="row mb-3 g-2 align-items-center">
          <div class="my-0 ps-2 col-12 form-text">Class (Cohort)</div>
          <div class="my-0 col-12">
            <input v-model="temp.class" type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row mb-3 g-2 align-items-center">
          <div class="my-0 ps-3 ms-4 col-12 form-text">GitHub URL</div>
          <div class="my-0 col-12 d-flex align-items-center">
            <i class="mdi mdi-github me-2 fs-4"></i>
            <input v-model="temp.github" type="url" class="form-control">
          </div>
        </div>
        <div class="row mb-3 g-2 align-items-center">
          <div class="my-0 ps-3 ms-4 col-12 form-text">LinkedIn URL</div>
          <div class="my-0 col-12 d-flex align-items-center">
            <i class="mdi mdi-linkedin me-2 fs-4"></i>
            <input v-model="temp.linkedin" type="url" class="form-control">
          </div>
        </div>
        <div class="row mb-3 g-2 align-items-center">
          <div class="my-0 ps-3 ms-4 col-12 form-text">Resume URL</div>
          <div class="my-0 col-12 d-flex align-items-center">
            <i class="mdi mdi-file-account me-2 fs-4"></i>
            <input v-model="temp.resume" type="url" class="form-control">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span class="ps-2 form-text">Bio</span>
      </div>
      <div class="col-12">
        <textarea v-model="temp.bio" class="form-control"></textarea>
      </div>
    </div>

      
  </div>
  <div class="card-footer d-flex justify-content-around">
    <button @click="resetForm" class="btn btn-primary">CANCEL</button>
    <button @click="updateAccount" class="btn btn-primary">SAVE</button>
  </div>
</div>
</template>

<script>
import { computed, onMounted} from 'vue';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState';
export default {
  setup() {
    
    onMounted(() => {
      accountService.restoreAccount()
    })

    return {
      temp: computed(() => AppState.account),
      resetForm: () => {
        accountService.restoreAccount()
      },
      updateAccount: async() => {
        try {
          await accountService.updateAccount()
          Pop.success()
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style scoped>
.profile-img {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

</style>
