<template>
  <div class="weddings">
    <h1 class="weddings_heading">Drone Services for Weddings</h1>
    <div class="weddings_desc">
      <img src="../../../assets/services/weddings.png" alt="" class="wedding_img"/>
      <div class="weddings_right_part">
        <p class="weddings_text">Welcome to Fresno Heights, where we offer specialized drone solutions to capture
          unforgettable moments on your wedding day. Our drone services can provide unique aerial perspectives, stunning
          visuals, and everlasting memories that will make your special day even more magical.
        </p>
        <button class="weddings_learn_more_btn">
          <router-link to="/weddings">Learn More</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingsProject'
}
</script>

<style>

.weddings_heading {
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

.weddings_desc {
  display: flex;
}

.weddings_text {
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

.weddings_learn_more_btn {
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

.weddings_learn_more_btn:hover {
  background: var(--color_white);
}

.weddings_learn_more_btn > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
  text-decoration: none;
}

.weddings_learn_more_btn > a:hover {
  color: var(--color_blue);
}

.weddings_right_part {
  width: 44%;
  height: 625px;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wedding_img {
  width: 57%;
}

@media (max-width: 1320px) {
  .weddings_text {
    font-size: 24px;
  }
}

@media (max-width: 1280px) {
  .weddings_desc {
    display: inherit;
  }

  .wedding_img {
    width: 100%;
  }

  .weddings_right_part {
    width: 100%;
    height: auto;
    padding: 4%;
  }
}

@media (max-width: 470px) {
  .weddings_heading {
    font-size: 37px;
    line-height: 123%;
  }

  .weddings_text {
    line-height: 130%;
    font-size: 18px;
  }
}
</style>