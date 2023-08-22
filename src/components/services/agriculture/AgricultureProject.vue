<template>
  <div class="agriculture">
    <h1 class="agr_heading_service">Drone Services for Agriculture Projects</h1>
    <div class="agriculture_desc">
      <img src="../../../assets/services/agriculture.png" alt="" class="agr_img"/>
      <div class="agr_right_part">
        <p class="agr_text">Welcome to Fresno Hights, where we offer innovative drone solutions for agriculture
          projects. Our specialized
          drone services can revolutionize farming practices, providing farmers with valuable data, insights, and
          increased operational efficiency.
        </p>
        <button class="agr_learn_more_btn">
          <router-link to="/agriculture">Learn More</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgricultureProject'
}
</script>

<style>

.agr_heading_service {
  font-size: 50px;
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding-bottom: 1%;
  padding-top: 4%;
}

.agriculture_desc {
  display: flex;
}

.agr_text {
  padding-left: 6px;
  padding-right: 6px;
  text-align: center;
  font-family: Kaisei Decol, serif;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.8%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.agr_learn_more_btn {
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

.agr_learn_more_btn:hover {
  background: var(--color_white);
}

.agr_learn_more_btn > a {
  color: var(--color_white);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.agr_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.agr_right_part {
  width: 44%;
  height: auto;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.agr_img {
  width: 57%;
}

@media (max-width: 1320px) {
  .agr_text {
    font-size: 24px;
  }
}

@media (max-width: 1280px) {
  .agriculture_desc {
    display: inherit;
  }

  .agr_img {
    width: 100%;
  }

  .agr_right_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .agr_heading_service {
    font-size: 37px;
    line-height: 123%;
  }

  .agr_text {
    line-height: 130%;
    font-size: 18px;
  }
}
</style>