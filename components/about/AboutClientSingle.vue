<script>
export default {
  props: ["client"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- About single client -->
  <div>
    <img
      :src="client.img"
      :alt="client.title"
      class="
        dark:bg-slate-400
        object-fill h-48 w-96
        py-5
        px-10
        border border-ternary-light
        dark:border-ternary-dark
        shadow-sm
        rounded-lg
        mb-8
        cursor-pointer
        
      "
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
