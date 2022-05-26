<template>
<div>
    <ScrollProgress />
  <div class="container mx-auto">
    <AppBanner />
  </div>
  </div>
</template>

<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
import ScrollProgress from "../components/ScrollProgress.vue";

export default {
  scrollToTop: true,
  components: { AppBanner, Button, ScrollProgress },
};
</script>

<style scoped>
.hover {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  border: 0;
  outline: 0;
  overflow: hidden;
  border-radius: 50%;
  background-color: #000;
  margin: 100px;
  z-index: 1;
  transition: transform 200ms;
}

.hover:hover {
  transform: scale(1.2);
}

.hover:before {
  position: absolute;
  content: "";
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background-color: #777;
  transition: transform 300ms;
  backface-visibility: hidden;
}

.hover.right:before {
  transform: translateX(-100%);
}

.hover.left:before {
  transform: translateX(100%);
}

.hover span {
  margin: auto;
  color: #fff;
}
</style>
