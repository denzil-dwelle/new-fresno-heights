<template>
  <div class="agr_main_wrapper">
    <div class="agr">
      <PageHeader/>
    </div>
    <AgrBenefits />
    <AnalysisTypes />
    <ContactPart />
  </div>
</template>

<script>
import PageHeader from "@/components/header/Header.vue";
import AgrBenefits from "@/components/sub_items/agriculture/AgrBenefits.vue";
import AnalysisTypes from "@/components/sub_items/agriculture/AnalysisTypes.vue";
import ContactPart from "@/components/contact/Contact.vue";

export default {
  name: 'AgriculturePage',
  components: {ContactPart, AnalysisTypes, AgrBenefits, PageHeader}
}
</script>

<style>

.agr {
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>