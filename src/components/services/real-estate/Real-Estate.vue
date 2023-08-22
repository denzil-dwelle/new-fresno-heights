<template>
  <div class="real_estate">
    <h1 class="real_estate_heading">Drone Services for Real Estate</h1>
    <div class="real_estate_desc">
      <img src="../../../assets/services/real-estate.png" alt="" class="real_estate_img"/>
      <div class="real_estate_right_part">
        <p class="real_estate_text">Welcome to Fresno Heights, where we offer specialized drone solutions for real
          estate
          projects. Our drone services can enhance marketing efforts, provide stunning visuals, and deliver valuable
          data and insights to showcase properties in the best possible way.
        </p>
        <button class="real_estate_learn_more_btn">
          <router-link to="/real-estate">Learn More</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealEstate'
}
</script>

<style>

.real_estate_heading {
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

.real_estate_desc {
  display: flex;
}

.real_estate_text {
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

.real_estate_learn_more_btn {
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

.real_estate_learn_more_btn:hover {
  background: var(--color_white);
}

.real_estate_learn_more_btn > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.real_estate_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.real_estate_right_part {
  width: 44%;
  height: 633px;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.real_estate_img {
  width: 57%;
}

@media (max-width: 1320px) {
  .real_estate_text {
    font-size: 24px;
  }
}

@media (max-width: 1280px) {
  .real_estate_desc {
    display: inherit;
  }

  .real_estate_img {
    width: 100%;
  }

  .real_estate_right_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .real_estate_heading {
    font-size: 37px;
    line-height: 123%;
  }

  .real_estate_text {
    line-height: 130%;
    font-size: 18px;
  }
}
</style>