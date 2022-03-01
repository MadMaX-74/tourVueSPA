<template>
  <div @click="onEmmit(tour.id)">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img
        :src="require(`@/assets/img/${tour.image}`)"
        :alt="tour.image"
        class="mb-3"
      />
      <h3 class="">{{ tour.title }}</h3>
      <div class="description" v-if="`${tour.descr.value > 200}`">
        {{ tour.descr | cutText }}
        <br />
        <span>Читать далее</span>
      </div>
      <div class="description" v-else>
        {{ tour.descr}}
        <br />
      </div>
      
    </div>
  </div>
</template>

<script>
import "../filters";
export default {
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>