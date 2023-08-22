<template>
  <div>
    <div class="special_wrapper">
      <PageHeader />
    </div>
    <SpecialVideo />
    <SpecialBenefitService />
    <ContactPart />
  </div>
</template>
<script>
import PageHeader from "@/components/header/Header.vue";
import ContactPart from "@/components/contact/Contact.vue";
import SpecialVideo from "@/components/sub_items/special/SpecialVideo.vue";
import SpecialBenefitService from "@/components/sub_items/special/SpecialBenefitService.vue";

export default {
  name: 'SpecialProject',
  components: { SpecialBenefitService, ContactPart, SpecialVideo, PageHeader}
}
</script>

<style>
.special_wrapper{
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>