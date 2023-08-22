<template>
  <div class="inspections">
    <h1 class="insp_heading">Drone Services for Roofing and Solar Inspections</h1>
    <div class="inspections_desc">
      <img src="../../../assets/services/inspections.png" alt="" class="insp_img"/>
      <div class="insp_right_part">
        <p class="insp_text">Welcome to Fresno Heights, where we offer specialized drone solutions for roofing and solar
          inspections. Our drone services can provide efficient and accurate inspections, helping you identify issues,
          assess damage, and optimize maintenance processes for roofs and solar installations.
        </p>
        <button class="insp_learn_more_btn">
          <router-link to="/inspections">Learn More</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspectionsProject'
}
</script>

<style>

.insp_heading {
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

.inspections_desc {
  display: flex;
}

.insp_img {
  width: 57%;
}

.insp_text {
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
  padding-left: 6px;
  padding-right: 6px;
}

.insp_learn_more_btn {
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

.insp_learn_more_btn:hover {
  background: var(--color_white);
}

.insp_learn_more_btn > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.insp_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.insp_right_part {
  width: 44%;
  height: 627px;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1320px) {
  .insp_text {
    font-size: 24px;
  }
}

@media (max-width: 1280px) {
  .inspections_desc {
    display: inherit;
  }

  .insp_heading {
    line-height: unset;
  }

  .insp_img {
    width: 100%;
  }

  .insp_right_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .insp_heading {
    font-size: 37px;
    line-height: 123%;
  }

  .insp_text {
    line-height: 130%;
    font-size: 18px;
  }
}
</style>