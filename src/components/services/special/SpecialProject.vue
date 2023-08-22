<template>
  <div class="special">
    <h1 class="special_heading">Drone Services for Special Projects</h1>
    <div class="special_desc_img_bottom">
      <div class="special_left_part">
        <p class="special_text">Welcome to Fresno Heights, where we offer specialized drone solutions for a wide range
          of
          special projects. Our drone services can provide unique perspectives, valuable data, and innovative solutions
          to help you achieve your project goals.
        </p>
        <button class="special_learn_more_btn">
          <router-link to="/special">Learn More</router-link>
        </button>
      </div>
      <img src="../../../assets/services/special.png" alt="" class="special_img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialProject'
}
</script>

<style>

.special_heading {
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

.special_desc_img_bottom {
  display: flex;
}

.special_text {
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

.special_learn_more_btn {
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

.special_learn_more_btn:hover {
  background: var(--color_white);
}

.special_learn_more_btn > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.special_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.special_left_part {
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

.special_img {
  width: 57%;
}

@media (max-width: 1320px) {
  .special_text {
    font-size: 24px;
  }
}

@media (max-width: 1280px) {
  .special_desc_img_bottom {
    display: flex;
    flex-direction: column-reverse;
  }

  .special_img {
    width: 100%;
  }

  .special_left_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .special_heading {
    font-size: 37px;
    line-height: 123%;
  }

  .special_text {
    line-height: 130%;
    font-size: 18px;
  }
}

</style>