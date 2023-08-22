<template>
  <div class="special_benefit">
    <div class="special_benefit_content">
      <h2 class="special_benefit_heading">Benefits of Our Drone Services</h2>
      <div>
        <div class="special_benefit_sections">
          <h3 class="special_sections_heading">Aerial Photography and Videography:</h3>
          <p class="special_sections_desc"> Our drones capture stunning aerial shots and videos, providing unique
            perspectives for your special project. Whether it's an event, a documentary, or an artistic project, our
            drones can capture the essence and beauty of the moment.</p>
        </div>

        <div class="special_benefit_sections">
          <h3 class="special_sections_heading">Site Inspections and Surveys:</h3>
          <p class="special_sections_desc"> We offer aerial inspections and surveys for various projects, such as
            infrastructure assessments, historical site documentation, or environmental studies. Our drones provide
            high-resolution imagery, 3D mapping, and accurate measurements.</p>
        </div>

        <div class="special_benefit_sections">
          <h3 class="special_sections_heading">Emergency Response and Disaster Assessment:</h3>
          <p class="special_sections_desc"> In emergency situations or post-disaster scenarios, our drones can assist
            with search and rescue efforts, damage assessments, and monitoring of affected areas. This information helps
            in planning and coordinating response efforts.</p>
        </div>

        <div class="special_benefit_sections">
          <h3 class="special_sections_heading">Event Coverage and Live Streaming:</h3>
          <p class="special_sections_desc"> Our drones can provide captivating event coverage and live streaming,
            enhancing the experience for remote viewers. From concerts and sports events to festivals and conferences,
            our drones capture the energy and excitement from above.</p>
        </div>

        <div class="special_benefit_sections">
          <h3 class="special_sections_heading">Spatial Mapping and Modeling:</h3>
          <p class="special_sections_desc"> Using advanced photogrammetry techniques, we can create detailed 3D models
            and virtual environments for architectural projects, urban planning, or entertainment purposes. These models
            help in design, visualization, and simulations.</p>
        </div>

        <div class="special_benefit_sections">
          <h3 class="special_sections_heading">Custom Solutions:</h3>
          <p class="special_sections_desc"> We work closely with clients to understand the unique requirements of their
            special projects and develop customized drone solutions. Our expertise and flexible approach ensure we meet
            your specific needs.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SpecialBenefitService'
}
</script>
<style>
.special_benefit {
  padding: 4%;
}

.special_benefit_content {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  padding: 4% 10% 4% 10%;
  text-align: center;
}

.special_benefit_heading {
  font-family: Jockey One, serif;
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

.special_sections_heading {
  font-family: Jockey One, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.special_sections_desc {
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
  .special_sections_desc {
    font-size: 16px;
  }

  .special_sections_heading {
    font-size: 23px;
  }
}

@media (max-width: 320px) {
  .special_sections_desc {
    font-size: 14px;
  }

  .special_sections_heading {
    font-size: 21px;
  }
}
</style>