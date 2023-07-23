<template>
    <div v-if="user.isAuthenticated">
      <div class="dropdown my-2 my-lg-0">
        <div type="button" class="border-0 no-select" data-bs-toggle="dropdown" aria-expanded="false">
          <div v-if="account.picture || user.picture">
            <img :src="account.picture || user.picture" alt="account photo" height="40" class="account-img" />
          </div>
        </div>
        <div class="dropdown-menu dropdown-menu-lg-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
          <div class="list-group">
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item dropdown-item list-group-item-action">
                Edit Profile
              </div>
            </router-link>
            <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
              <i class="mdi mdi-logout"></i>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.account-img {
  height: 16vh;
  width: 16vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
