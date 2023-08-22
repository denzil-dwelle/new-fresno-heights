<template>
  <div>
    <div class="real_estate_wrapper">
      <PageHeader/>
    </div>
    <RealEstateVideo />
    <RealEstateBenefitService />
    <ContactPart/>
  </div>
</template>
<script>
import PageHeader from "@/components/header/Header.vue";
import ContactPart from "@/components/contact/Contact.vue";
import RealEstateVideo from "@/components/sub_items/real-estate/RealEstateVideo.vue";
import RealEstateBenefitService from "@/components/sub_items/real-estate/RealEstateBenefitService.vue";

export default {
  name: 'Real-Estate',
  components: {RealEstateBenefitService, ContactPart, RealEstateVideo, PageHeader}
}
</script>

<style>
.real_estate_wrapper {
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>