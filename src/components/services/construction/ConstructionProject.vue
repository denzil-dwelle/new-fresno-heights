<template>
  <div class="construction">
    <h1 class="constr_heading">Drone Services for Construction Projects</h1>
    <div class="construction_desc_img_bottom">
      <div class="constr_left_part">
        <p class="constr_text">Welcome to Fresno Heights, where we offer cutting-edge drone solutions for construction
          projects. Our specialized drone services can enhance efficiency, safety, and accuracy in various
          construction-related tasks, providing you with valuable data and insights.
        </p>
        <button class="constr_learn_more_btn">
          <router-link to="/construction">Learn More</router-link>
        </button>
      </div>
      <img src="../../../assets/services/construction.png" alt="" class="constr_img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConstructionProject'
}
</script>

<style>

.constr_heading {
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

.construction_desc_img_bottom {
  display: flex;
}

.constr_text {
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

.constr_learn_more_btn {
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

.constr_learn_more_btn:hover {
  background: var(--color_white);
}

.constr_learn_more_btn > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.constr_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.constr_left_part {
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

.constr_img {
  width: 57%;
}

@media (max-width: 1320px) {
  .constr_text {
    font-size: 24px;
  }
}


@media (max-width: 1280px) {
  .construction_desc_img_bottom {
    display: flex;
    flex-direction: column-reverse;
  }

  .constr_img {
    width: 100%;
  }

  .constr_left_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .constr_heading {
    font-size: 37px;
    line-height: 123%;
  }

  .constr_text {
    line-height: 130%;
    font-size: 18px;
  }
}
</style>