<template>
  <div class="landscaping">
    <h1 class="land_heading">Drone Services for Landscaping Projects</h1>
    <div class="landscaping_desc_img_bottom">
      <div class="land_left_part">
        <p class="land_text">Welcome to Fresno Heights, where we offer comprehensive drone solutions for landscaping
          projects. Our specialized drone services can enhance efficiency, accuracy, and creativity in various
          landscaping tasks, providing you with valuable data, insights, and stunning visuals.
        </p>
        <button class="land_learn_more_btn">
          <router-link to="/landscape">Learn More</router-link>
        </button>
      </div>
      <img src="../../../assets/services/landscaping.png" alt="" class="land_img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandscapingProject'
}
</script>

<style>

.land_heading {
  font-family: 'Fira Sans', sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 163.023%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding-bottom: 1%;
  padding-top: 4%;
}

.landscaping_desc_img_bottom {
  display: flex;
}

.land_text {
  padding-left: 6px;
  padding-right: 6px;
  text-align: center;
  font-family: Kaisei Decol, serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.8%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.land_learn_more_btn {
  display: flex;
  width: 174px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--background_linear_light);
  box-shadow: var(--shadow_8);
  border: none;
}

.land_learn_more_btn:hover {
  background: var(--color_white);
}

.land_learn_more_btn > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.land_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.land_left_part {
  width: 44%;
  height: 630px;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.land_img {
  width: 57%;
}

@media (max-width: 1320px) {
  .land_text {
    font-size: 24px;
  }
}

@media (max-width: 1280px) {
  .landscaping_desc_img_bottom {
    display: flex;
    flex-direction: column-reverse;
  }

  .land_img {
    width: 100%;
  }

  .land_left_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .land_heading {
    font-size: 37px;
    line-height: 123%;
  }

  .land_text {
    line-height: 130%;
    font-size: 18px;
  }
}

</style>