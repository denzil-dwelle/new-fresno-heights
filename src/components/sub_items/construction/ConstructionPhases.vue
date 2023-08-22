<template>
  <div class="constr_phases">
    <div class="constr_phases_content">
      <h1 class="constr_phases_heading">Phases</h1>
      <div>
        <div class="phases_section">
          <h6 class="phases_heading">Discovery: </h6>
          <span class="phases_desc">Determining scope of the project and the key measurements needed.</span>
        </div>

        <div class="phases_section">
          <h6 class="phases_heading">Planning: </h6>
          <span class="phases_desc">Planning the flight including FAA clearance, weather, equipment checks, and pre-flight checks.</span>
        </div>

        <div class="phases_section">
          <h6 class="phases_heading">Gathering: </h6>
          <span class="phases_desc">Executing the flight mission and collecting the images needed for the Orthomosaic main image.</span>
        </div>

        <div class="phases_section">
          <h6 class="phases_heading">Processing: </h6>
          <span class="phases_desc">Stitching together the individual images into the Orthomosaic and placing on Google Earth Pro.</span>
        </div>

        <div class="phases_section">
          <h6 class="phases_heading">Analyzing: </h6>
          <span class="phases_desc">Determining inventory, measurements, and other information identified in the Planning phase.</span>
        </div>

        <div class="phases_section">
          <h6 class="phases_heading">Reporting: </h6>
          <span class="phases_desc">Drafting a report which sums up all the findings.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConstructionPhases'
}

</script>

<style>

.constr_phases {
  padding: 0 4% 4%;
}

.constr_phases_content{
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phases_section{
  display: flex;
  align-items: center;
  gap: 20px;
}

.constr_phases_heading{
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2%;
}

.phases_heading{
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.phases_desc{
  font-family: Kaisei Decol,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 1110px) {
  .phases_desc{
    margin: 1% 0;
  }
}

@media (max-width: 660px) {
  .phases_heading{
    font-size: 28px;
  }

  .phases_desc{
    font-size: 18px;
  }
}

@media (max-width: 570px) {
  .phases_section{
    flex-direction: column;
    gap: 0;
  }

  .phases_desc{
    text-align: center;
  }
}
</style>