<script setup>
import Nav from './nav/Nav.vue'
</script>

<template>
  <div class="app">
    <Nav />
    <RouterView />
    <footer class="footer text-center mt-80">
      ©Vivre 2024 All right Reserved
    </footer>
  </div>
</template>

<style scoped>
.app {
  font-family: 'Noto Sans TC', 'Roboto', sans-serif;
}

.mt-80 {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
