<template>
  <div class="inspection_benefit">
    <div class="inspection_benefit_content">
      <h2 class="inspection_benefit_heading">Benefits of Our Drone Services</h2>
      <div>
        <div class="inspection_benefit_sections">
          <h3 class="inspection_sections_heading">Roof Inspections:</h3>
          <p class="inspection_sections_desc"> Our drones can perform detailed aerial inspections of roofs, capturing
            high-resolution images and videos. This allows for close examination of hard-to-reach areas, identification
            of potential damage, and assessment of overall roof condition.</p>
        </div>

        <div class="inspection_benefit_sections">
          <h3 class="inspection_sections_heading">Solar Panel Inspections:</h3>
          <p class="inspection_sections_desc"> We offer precise inspections of solar installations using drones equipped
            with thermal imaging sensors. This enables identification of malfunctioning panels, hotspots, and efficiency
            issues, maximizing solar energy production.</p>
        </div>

        <div class="inspection_benefit_sections">
          <h3 class="inspection_sections_heading">Efficient and Accurate Data Collection:</h3>
          <p class="inspection_sections_desc"> By utilizing drones, we can quickly and accurately gather comprehensive
            data about roofs and solar installations. This data includes imagery, thermal readings, and other sensor
            data, providing a holistic view of the inspected structures.</p>
        </div>

        <div class="inspection_benefit_sections">
          <h3 class="inspection_sections_heading">Early Issue Detection:</h3>
          <p class="inspection_sections_desc"> Our drone inspections can identify early signs of roof deterioration,
            water damage, loose shingles, faulty wiring, or other issues that might require attention. Early detection
            allows for timely repairs and helps prevent more extensive damage or system failures.</p>
        </div>

        <div class="inspection_benefit_sections">
          <h3 class="inspection_sections_heading">Improved Safety:</h3>
          <p class="inspection_sections_desc"> Using drones for inspections eliminates or reduces the need for manual
            inspections performed by workers on roofs or elevated structures. This helps minimize safety risks and
            ensures the well-being of your personnel.</p>
        </div>

        <div class="inspection_benefit_sections">
          <h3 class="inspection_sections_heading">Cost and Time Savings:</h3>
          <p class="inspection_sections_desc"> Our drone services provide efficient inspections, reducing the time
            required for inspections and minimizing labor costs. By identifying issues early on, you can avoid costly
            repairs or replacements and optimize maintenance schedules.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InspectionsService'
}
</script>
<style>
.inspection_benefit {
  padding: 4%;
}

.inspection_benefit_content {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  padding: 4% 10% 4% 10%;
  text-align: center;
}

.inspection_benefit_heading {
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

.inspection_sections_heading {
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

.inspection_sections_desc {
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
  .inspection_sections_desc{
    font-size: 15px;
  }

  .inspection_sections_heading{
    font-size: 23px;
  }
}

@media (max-width: 320px) {
  .inspection_sections_desc{
    font-size: 13px;
  }

  .inspection_sections_heading{
    font-size: 21px;
  }
}
</style>