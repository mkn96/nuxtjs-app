<template>
<div>
  <ScrollProgress />
  <div class="container mx-auto">
    <ProjectsGrid />
    <NuxtLink :to="path"><p class="pt-10 text-right font-bold dark:text-white">.. cd</p></NuxtLink>
   </div>
  </div>
</template>

<script>
import ScrollProgress from "~/components/ScrollProgress.vue";

export default {
  components: { ScrollProgress },
  scrollToTop: true,
  data: () => {
    return {
      path: '/',
    };
  },
  created() {
    if (this.$nuxt?.context?.from?.path) this.path = this.$nuxt.context.from.path;
  },
  computed: {
    // @todo
  },
};
</script>

<style lang="scss" scoped>
</style>
