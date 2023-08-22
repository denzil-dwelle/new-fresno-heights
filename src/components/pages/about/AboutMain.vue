<template>
  <div class="about_main">
    <div class="about_page_header">
      <PageHeader/>
    </div>
    <AboutUs />
    <OurFleet />
  </div>
</template>

<script>
import AboutUs from "@/components/pages/about/AboutUs.vue";
import OurFleet from "@/components/pages/about/OurFleet.vue";
import PageHeader from "@/components/header/Header.vue";

export  default {
  name: 'AboutMain',
  components: {PageHeader, OurFleet, AboutUs},
}
</script>

<style>
.about_page_header{
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>