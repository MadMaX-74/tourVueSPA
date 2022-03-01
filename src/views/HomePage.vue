<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <tour-component
        v-for="tour in tours"
        :key="tour.id"
        :tour="tour"
        @onNavigate="navigate"
        ></tour-component>
        
      </div>
    </div>
  </div>
</template>

<script>
import TourComponent from '../components/TourComponent.vue'
import { navigate } from '../mixins/navigate';

export default {
  components: {
    TourComponent
  },
  computed: {
    tours() {
      return this.$store.getters["getTours"];
    },
  },
  data(){
    return {
      name: 'tour'
    }
  },
  mixins: [navigate]
}
</script>

<style lang="scss" scoped>
</style>
