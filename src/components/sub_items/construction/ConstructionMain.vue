<template>
  <div>
    <div class="construction_wrapper">
      <PageHeader />
    </div>
    <ConstructionVideo />
    <ConstructionBenefitService />
    <ConstructionPhases />
    <ContactPart />
  </div>
</template>
<script>
import PageHeader from "@/components/header/Header.vue";
import ContactPart from "@/components/contact/Contact.vue";
import ConstructionVideo from "@/components/sub_items/construction/ConstructionVideo.vue";
import ConstructionBenefitService from "@/components/sub_items/construction/ConstructionBenefitService.vue";
import ConstructionPhases from "@/components/sub_items/construction/ConstructionPhases.vue";

export default {
  name: 'ConstructionMain',
  components: {ConstructionBenefitService, ContactPart, ConstructionPhases, ConstructionVideo, PageHeader}
}
</script>

<style>
.construction_wrapper{
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>