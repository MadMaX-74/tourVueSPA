<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1">
        <img class="mb-4 w-100" :src="require(`@/assets/img/${tour.image}`)" :alt="tour.image" />
        <h2>{{tour.title}}</h2>
        <div class="description">
          {{tour.descr}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    pageName() {
      return this.$route.name;
    },
    tour() {
      return this.$store.getters["getTourById"](this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>