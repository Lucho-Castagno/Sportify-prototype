<template>
  <Welcome />
  <Presentation />
</template>

<script>
import Welcome from '@/components/Home/Welcome.vue'
import Presentation from '@/components/Home/Presentation.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Presentation
  }
}
</script>
