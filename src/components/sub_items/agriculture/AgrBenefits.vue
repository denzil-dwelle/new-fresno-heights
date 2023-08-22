<template>
  <div class="agr_main_wrapper">
    <div class="agr_video">
      <video src="../../../assets/video/agriculture.mp4"
             muted
             loop
             autoplay
             controls
             style="width: 100%"></video>
    </div>
    <div class="agr_content">
      <div class="benefits_of-service">
        <h1 class="agr_heading">Benefits of Our Drone Services</h1>
        <div>
          <h3 class="benefits_heading">Precision Crop Monitoring:</h3>
          <p class="benefits_desc">Our drones capture high-resolution images of crops, enabling farmers to monitor crop
            health, identify
            nutrient deficiencies, detect pests or diseases, and optimize irrigation and fertilization strategies.</p>
        </div>
        <div>
          <h3 class="benefits_heading">Field Mapping:</h3>
          <p class="benefits_desc"> We use drones equipped with advanced sensors and GPS technology to create detailed
            maps of agricultural
            fields, providing valuable information about soil variability, topography, and drainage patterns.</p>
        </div>
        <div>
          <h3 class="benefits_heading">Yield Estimation:</h3>
          <p class="benefits_desc"> By analyzing aerial imagery collected by our drones throughout the growing season,
            we provide farmers with
            valuable insights into crop yield potential, helping them make informed decisions about harvesting and
            marketing strategies.</p>
        </div>
        <div>
          <h3 class="benefits_heading">Livestock Monitoring:</h3>
          <p class="benefits_desc"> Our drones can assist in livestock management by providing aerial surveillance,
            monitoring herd movements,
            and identifying potential issues in grazing patterns or fence integrity.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AgrBenefits'
}
</script>

<style>

.agr_content {
  padding: 4%;
}

.benefits_of-service {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  text-align: center;
  padding: 4% 10% 4% 10%;
}

.benefits_heading {
  font-family: Jockey One,serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
}

.benefits_desc {
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2% auto;
}

.agr_heading{
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

@media (max-width: 400px) {
  .benefits_desc {
    font-size: 16px;
  }

  .benefits_heading {
    font-size: 23px;
    margin-top: 8%;
  }

  .agr_heading {
    font-size: 37px;
  }
}

@media (max-width: 320px) {
  .benefits_desc {
    font-size: 14px;
  }

  .benefits_heading {
    font-size: 21px;
  }
}

</style>