<template>
  <div class="back-to-top-btn" @click="scrollToTop" v-show="isVisible">
    <img width="48" height="43" src="../../assets/top-to-button.png" alt="double-up--v1"/>
  </div>
</template>

<script>
export default {
  name: 'TopButton',

  data() {
    return {
      isVisible: false,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 200;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style>

.back-to-top-btn {
  position: fixed;
  bottom: 3%;
  right: 1.5%;
  cursor: pointer;
}

</style>
