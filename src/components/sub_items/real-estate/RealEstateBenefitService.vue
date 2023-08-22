<template>
  <div class="real_estate_benefit">
    <div class="real_estate_benefit_content">
      <h2 class="real_estate_benefit_heading">Benefits of Our Drone Services</h2>
      <div>
        <div class="real_estate_benefit_sections">
          <h3 class="real_estate_sections_heading">Aerial Photography and Videography:</h3>
          <p class="real_estate_sections_desc"> Our drones capture high-resolution images and videos from unique aerial
            perspectives, showcasing properties and their surroundings in a visually stunning way. This enhances real
            estate listings, brochures, and marketing materials.</p>
        </div>

        <div class="real_estate_benefit_sections">
          <h3 class="real_estate_sections_heading">Virtual Tours:</h3>
          <p class="real_estate_sections_desc"> We offer immersive virtual tours leveragong a special indoor drone. This
            interactive experiences allows potential buyers to explore properties remotely, gaining a comprehensive
            understanding of the layout, features, and surroundings.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'RealEstateBenefitService'
}
</script>
<style>

.real_estate_benefit {
  padding: 4%;
}

.real_estate_benefit_content {
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  height: 100%;
  padding: 4% 10% 4% 10%;
  text-align: center;
}

.real_estate_benefit_heading {
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

.real_estate_sections_heading {
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

.real_estate_sections_desc {
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
  .real_estate_sections_desc{
    font-size: 15px;
  }

  .real_estate_sections_heading{
    font-size: 23px;
  }
}

@media (max-width: 320px) {
  .real_estate_sections_desc{
    font-size: 13px;
  }

  .real_estate_sections_heading{
    font-size: 21px;
  }
}
</style>