<template>
  <div class="drone_services">
    <AgricultureProject/>
    <ConstructionProject/>
    <Inspections/>
    <LandscapingProject/>
    <RealEstate/>
    <SpecialProject/>
    <Weddings/>
  </div>

</template>

<script>
import AgricultureProject from "@/components/services/agriculture/AgricultureProject.vue";
import ConstructionProject from "@/components/services/construction/ConstructionProject.vue";
import Inspections from "@/components/services/inspections/Inspections.vue";
import LandscapingProject from "@/components/services/landscaping/LandscapingProject.vue";
import RealEstate from "@/components/services/real-estate/Real-Estate.vue";
import SpecialProject from "@/components/services/special/SpecialProject.vue";
import Weddings from "@/components/services/weddings/Weddings.vue";

export default {
  name: 'DroneServices',
  components: {
    Weddings,
    SpecialProject, RealEstate, LandscapingProject, Inspections, ConstructionProject, AgricultureProject
  }
}
</script>

<style>

.drone_services {
  padding: 0 4% 2% 4%;
}
</style>