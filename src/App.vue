<template>
  <div class="bg-slate-50">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style></style>
