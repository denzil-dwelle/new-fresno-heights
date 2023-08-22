<template>
  <div>
    <div class="landscape_wrapper">
      <PageHeader />
    </div>
    <LandscapeVideo />
    <LandscapeBenefitService />
    <ContactPart />
  </div>
</template>
<script>
import PageHeader from "@/components/header/Header.vue";
import ContactPart from "@/components/contact/Contact.vue";
import LandscapeVideo from "@/components/sub_items/landscape/LandscapeVideo.vue";
import LandscapeBenefitService from "@/components/sub_items/landscape/LandscapeBenefitService.vue";

export default {
  name: 'LandscapeMain',
  components: {LandscapeBenefitService, ContactPart, LandscapeVideo, PageHeader}
}
</script>

<style>
.landscape_wrapper{
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>