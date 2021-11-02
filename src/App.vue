<template>
  <Navigation />
  <RouterView></RouterView>
</template>

<script>
import { defineComponent} from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView, Navigation
  },

})
</script>
