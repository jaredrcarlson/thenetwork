<template>

  <!-- <nav class="navbar navbar-expand-lg px-3"> -->
    <div class="container-fluid">
      <div class="row my-2">
        
        <div class="col-1"></div>

        <div class="col-8 d-flex align-items-center justify-content-between">
          <div class="ms-2 d-flex align-items-center">
            <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
              <img src="../assets/img/logo.png" alt="Logo" title="Home" height="24">
            </router-link>
          </div>
          <div>
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search">
              <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
        
        </div>

        <div class="col-3"></div>
          
      </div>
      
      
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">Toggle</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto">
          <li>
            <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
              About
            </router-link>
          </li>
        </ul>
      </div> -->
      
    </div>
    <!-- </nav> -->

</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
