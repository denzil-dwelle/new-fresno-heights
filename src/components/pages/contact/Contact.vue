<template>
  <div class="contact_wrapper">
    <div class="contact_us">
      <div class="contact-header">
        <PageHeader/>
      </div>
      <ContactPart/>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/header/Header.vue";
import ContactPart from "@/components/contact/Contact.vue";

export default {
  name: 'ContactUs',
  components: { ContactPart, PageHeader}
}
</script>

<style>
.contact-header {
  background: var(--background_linear_light);
  padding: 2% 4%;
  margin-bottom: 3%;
}
</style>