<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <!-- Banner left contents -->
    <div class="typewriter w-full md:w-1/3 text-left">
      <h2
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          uppercase
        "
      >
        Hi, i'm Mykhail
      </h2>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
      A Web Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="/assets/files/cv_miken.pdf"
          download=""
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-500
            focus:ring-1 focus:ring-indigo-900
            hover:bg-green-500
            text-gray-50
            hover:text-white
            duration-500
          "
          aria-label="Download CV"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="this.$colorMode.value == 'dark'"
        src="~/assets/images/main/developer-dark.svg"
        alt="Developer Dark"
      />
      <img v-else src="~/assets/images/main/developer.svg" alt="Developer Light" />
    </div>
  </section>
</template>

<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  };
</script>

<style scoped>
	h2 {
  background: radial-gradient(circle, #483D8B 0%, #20B2AA 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: animatedGradient 1.5s infinite ease;
  animation-direction: alternate;
  }

  @keyframes animatedGradient {
  from {
    background-size: 100%;
  }

  to {
    background-size: 250%;
  }
}
</style>
