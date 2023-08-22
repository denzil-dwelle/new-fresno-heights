<template>
  <div>
    <ContentPart />
    <DroneServices />
    <DronePart />
    <WhyChooseUs />
    <ContactPart />
  </div>
</template>

<script>
  import ContentPart from "@/components/content/Content.vue";
  import DronePart from "@/components/drones/drone-main/Drones.vue";
  import DroneServices from "@/components/services/drone-service-main/DroneServices.vue";
  import ContactPart from "@/components/contact/Contact.vue";
  import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs.vue";

  export default {
    name: 'LandingPage',
    components: { WhyChooseUs, ContactPart, DroneServices, DronePart, ContentPart}
  }
</script>