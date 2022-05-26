<template>
  <div>
    <ScrollProgress />
    <AboutMe class="container mx-auto" />

    <AboutCounter />

    <AboutClients class="container mx-auto" />
  </div>
</template>

<script>
import feather from "feather-icons";
import ScrollProgress from "../components/ScrollProgress.vue";

export default {
  components: { ScrollProgress },
  name: "About",
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped>
</style>
