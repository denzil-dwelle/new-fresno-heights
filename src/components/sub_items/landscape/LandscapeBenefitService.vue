<template>
  <div class="landscape_benefit">
    <div class="landscape_benefit_content">
      <h2 class="landscape_benefit_heading">Benefits of Our Drone Services</h2>
      <div>
        <div class="landscape_benefit_sections">
          <h3 class="landscape_sections_heading">Aerial Site Surveys:</h3>
          <p class="landscape_sections_desc"> Our drones capture high-resolution imagery of landscaping sites, enabling
            precise measurements, accurate topographic mapping, and detailed site analysis. This information facilitates
            better planning and design of landscaping projects.</p>
        </div>

        <div class="landscape_benefit_sections">
          <h3 class="landscape_sections_heading">3D Modeling and Visualization:</h3>
          <p class="landscape_sections_desc"> We utilize advanced photogrammetry techniques to generate stunning 3D
            models and visualizations of landscapes. These visuals help clients visualize the final outcome, make design
            decisions, and showcase their projects to stakeholders.</p>
        </div>

        <div class="landscape_benefit_sections">
          <h3 class="landscape_sections_heading">Plant Health and Growth Monitoring:</h3>
          <p class="landscape_sections_desc"> By capturing aerial imagery on a regular basis, we enable clients to
            monitor the health and growth of plants and vegetation. This information helps in optimizing watering,
            fertilization, and maintenance practices.</p>
        </div>

        <div class="landscape_benefit_sections">
          <h3 class="landscape_sections_heading">Irrigation Analysis:</h3>
          <p class="landscape_sections_desc"> Our drones can provide valuable insights into the efficiency and
            effectiveness of irrigation systems. By identifying areas of over or under-watering, clients can optimize
            irrigation strategies, conserve water, and enhance plant health.</p>
        </div>

        <div class="landscape_benefit_sections">
          <h3 class="landscape_sections_heading">Construction Monitoring:</h3>
          <p class="landscape_sections_desc"> Our drones offer real-time monitoring of landscaping construction
            activities. This allows project managers to assess progress, track equipment and material utilization, and
            ensure adherence to design plans.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandscapeBenefitService'
}
</script>
<style>
.landscape_benefit {
  padding: 4%;
}

.landscape_benefit_content {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  padding: 4% 10% 4% 10%;
  text-align: center;
}

.landscape_benefit_heading {
  font-family: Jockey One,serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3%;
}

.landscape_sections_heading {
  font-family: Jockey One,serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.landscape_sections_desc {
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 400px) {
  .landscape_sections_desc{
    font-size: 15px;
  }

  .landscape_sections_heading{
    font-size: 23px;
  }
}

@media (max-width: 320px) {
  .landscape_sections_desc{
    font-size: 13px;
  }

  .landscape_sections_heading{
    font-size: 21px;
  }
}
</style>