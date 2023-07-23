<template>
  <div class="bg-slate-50 dark:bg-slate-800">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer/Footer.vue'
import Login from './components/Sesion/Login.vue';



export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style></style>
