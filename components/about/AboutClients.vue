<script>
import AboutClientSingle from './AboutClientSingle.vue';
export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'My Skills',
			clients: [
				{
					id: 1,
					title: 'javscript',
					img: require('@/assets/images/about/javascript.svg'),
				},
				{
					id: 2,
					title: 'typescript',
					img: require('@/assets/images/about/typescript-icon.svg'),
				},
				{
					id: 3,
					title: 'html5',
					img: require('@/assets/images/about/html-5.svg'),
				},
				{
					id: 4,
					title: 'css',
					img: require('@/assets/images/about/css-3.svg'),
				},
				{
					id: 5,
					title: 'react',
					img: require('@/assets/images/about/react.svg'),
				},
				{
					id: 6,
					title: 'vue',
					img: require('@/assets/images/about/vue.svg'),
				},
				{
					id: 7,
					title: 'vitejs',
					img: require('@/assets/images/about/vitejs.svg'),
				},
				{
					id: 8,
					title: 'nuxtjs',
					img: require('@/assets/images/about/nuxt-icon.svg'),
				},
        {
					id: 9,
					title: 'nextjs',
					img: require('@/assets/images/about/nextjs-icon.svg'),
				},
        {
					id: 10,
					title: 'tailwindcss',
					img: require('@/assets/images/about/tailwindcss-icon.svg'),
				},
        {
					id: 11,
					title: 'material-ui',
					img: require('@/assets/images/about/material-ui.svg'),
				},
        {
					id: 12,
					title: 'graphql',
					img: require('@/assets/images/about/graphql.svg'),
				},
        {
					id: 13,
					title: 'git',
					img: require('@/assets/images/about/git.svg'),
				},
         {
					id: 14,
					title: 'github',
					img: require('@/assets/images/about/github.svg'),
				},
         {
					id: 15,
					title: 'jest',
					img: require('@/assets/images/about/jest.svg'),
				},
         {
					id: 16,
					title: 'cypress',
					img: require('@/assets/images/about/cypress.svg'),
				},
			],
		};
	},
};
</script>

<template>
  <!-- About clients section -->
  <div class="mt-10 sm:mt-20">
    <p
      class="
        font-general-medium
        text-2xl text-center
        sm:text-3xl
        text-primary-dark
        dark:text-primary-light
      "
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-6 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
