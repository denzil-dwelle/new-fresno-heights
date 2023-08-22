<template>
  <div class="constr_benefit">
    <div class="constr_benefit_content">
      <h2 class="constr_benefit_heading">Benefits of Our Drone Services</h2>
      <div>
        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">Aerial Surveys and Mapping:</h3>
          <p class="constr_sections_desc"> Our drones can capture high-resolution aerial imagery of construction sites,
            allowing for accurate topographic mapping, site surveying, and progress tracking throughout the project
            lifecycle.</p>
        </div>

        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">3D Modeling and Visualization:</h3>
          <p class="constr_sections_desc"> We utilize advanced photogrammetry techniques to generate detailed 3D models
            and visualizations of construction sites, enabling better project planning, design evaluation, and
            collaboration among stakeholders.</p>
        </div>

        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">Construction Monitoring:</h3>
          <p class="constr_sections_desc"> Our drones provide real-time monitoring of construction activities, allowing
            project managers to assess site conditions, track equipment and material utilization, and identify potential
            issues or delays.</p>
        </div>

        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">Inspections and Maintenance:</h3>
          <p class="constr_sections_desc"> Our aerial drones can perform visual inspections of buildings, structures,
            and infrastructure, helping identify defects, damage, or maintenance requirements without the need for
            costly and time-consuming manual inspections.</p>
        </div>

        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">Measurements:</h3>
          <p class="constr_sections_desc"> Based on our drone photogrammetry we analyze the image for liner, area, and
            volume measurements.</p>
        </div>

        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">Infrared Imaging:</h3>
          <p class="constr_sections_desc"> We offer infrared imaging services to detect energy inefficiencies,
            insulation problems, and identify areas of heat loss in buildings, enabling clients to improve energy
            efficiency and reduce operating costs.</p>
        </div>

        <div class="constr_benefit_sections">
          <h3 class="constr_sections_heading">Project Documentation:</h3>
          <p class="constr_sections_desc"> Our drones capture high-quality images and videos that can be used for
            project documentation, progress reports, marketing materials, and client presentations.</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConstructionBenefitService'
}
</script>
<style>
.constr_benefit {
  padding: 4%;
}

.constr_benefit_content {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  padding: 4% 10% 4% 10%;
  text-align: center;
}

.constr_benefit_heading {
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

.constr_sections_heading {
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

.constr_sections_desc {
  text-align: center;
  font-family: 'Fira Sans', sans-serif;
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
  .constr_sections_desc {
    font-size: 16px;
  }

  .constr_sections_heading {
    font-size: 23px;
  }
}

@media (max-width: 320px) {
  .constr_sections_desc {
    font-size: 14px;
  }

  .constr_sections_heading {
    font-size: 21px;
  }
}
</style>