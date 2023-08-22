<template>
  <div>
    <router-view/>
    <FooterPart />
    <ChatbotPage/>
    <TopButton/>
  </div>
</template>

<script>

import TopButton from "@/components/top-button/TopButton.vue"
import ChatbotPage from "@/components/chatbot/Chatbot.vue"
import FooterPart from "@/components/footer/Footer.vue";
import { event } from 'vue-gtag'

export default {
  name: 'App',
  components: {FooterPart, ChatbotPage, TopButton},

  setup() {
    const login = () => {
      event('login', { method: 'Google' })
    }

    return {
      login
    }
  }
}

</script>

<style scoped>

@import "global.css";
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Jockey+One&display=swap');

body {
  margin: 0;
}

.swiper {
  max-width: 500px;
  height: 500px;
}

.swiper-slide {
  width: 500px !important;
  height: 500px !important;
  text-align: center;
  font-size: 18px;
  background: var(--color_white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
