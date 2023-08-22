<template>
  <div>
    <div class="inspection_wrapper">
      <PageHeader />
    </div>
    <InspectionsVideo />
    <InspectionsService />
    <ContactPart />
  </div>
</template>

<script>
import PageHeader from "@/components/header/Header.vue";
import ContactPart from "@/components/contact/Contact.vue";
import InspectionsVideo from "@/components/sub_items/inspections/InspectionsVideo.vue";
import InspectionsService from "@/components/sub_items/inspections/InspectionsService.vue";

export default {
  name: 'InspectionMain',
  components: {
    InspectionsService, InspectionsVideo, ContactPart, PageHeader}
}
</script>

<style>
.inspection_wrapper {
  background: var(--background_linear_light);
  padding: 2% 4%;
}
</style>