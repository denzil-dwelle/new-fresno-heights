<template>
  <div>
    <div class="wedding_wrapper">
      <PageHeader />
    </div>
    <WeddingVideo />
    <WeddingBenefitService />
    <ContactPart />
  </div>
</template>
<script>
import PageHeader from "@/components/header/Header.vue";
import WeddingVideo from "@/components/sub_items/weddings/WeddingVideo.vue";
import WeddingBenefitService from "@/components/sub_items/weddings/WeddingBenefitService.vue";
import ContactPart from "@/components/contact/Contact.vue";

export default {
  name: 'WeddingsMain',
  components: {WeddingVideo,  ContactPart, WeddingBenefitService, PageHeader}
}
</script>

<style>
.wedding_wrapper{
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>