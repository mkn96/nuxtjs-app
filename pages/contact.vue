<template>
<div>
 <ScrollProgress />
 
  <div class="container mx-auto flex flex-col-reverse md:flex-row md:py-10 md:mt-20">
    
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
      <ContactDetails :contacts="contacts" />
  </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import ScrollProgress from "../components/ScrollProgress.vue";
import ContactDetails from "../components/contact/ContactDetails.vue";

export default {
  components: { ScrollProgress, ContactDetails },
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Kherson",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "Gmail",
          icon: "mail",
        },
        {
          id: 3,
          name: "Telegram",
          icon: "send",
        },
        {
          id: 4,
          name: "Github",
          icon: "github",
        },
         {
          id: 5,
          name: "Twitter",
          icon: "twitter",
        },
      ],
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