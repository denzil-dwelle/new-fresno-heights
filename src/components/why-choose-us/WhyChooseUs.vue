<template>
  <div class="choose_us">
    <div class="choose_us_content">
      <h1 class="choose_us_heading">Why Choose Us</h1>
      <p class="choose_us_desc">At Fresno Heights, we are dedicated to making your day truly unforgettable. Here's why
        you should choose us</p>
      <div>
        <div class="choose_us_sections">
          <img v-if="windowWidth > 1000" src="@/assets/why-choose-us/img1.png" class="choose_us_img" alt=""/>
          <img v-else src="@/assets/why-choose-us/img1_small.png" class="choose_us_img" alt=""/>
          <div class="choose_us_parts">
            <h1 class="choose_us_parts_heading">Expertise and Experience</h1>
            <p class="choose_us_parts_desc">Expertise and Experience: Our team consists of skilled drone operators and
              professionals with extensive
              experience in aerial photography and videography for weddings. We understand the importance of capturing
              precious moments and have the expertise to do so.</p>
          </div>
        </div>
        <div class="hr_rotate1"></div>
        <div class="choose_us_sections_img_bottom">
          <div class="choose_us_parts">
            <h1 class="choose_us_parts_heading">State-of-the-Art Equipment</h1>
            <p class="choose_us_parts_desc">We utilize advanced drones equipped with high-resolution cameras and
              stabilizing technology to ensure the highest quality visuals. Our equipment allows us to capture stunning
              shots that will be cherished for a lifetime.</p>
          </div>
          <img v-if="windowWidth > 1000" src="@/assets/why-choose-us/img1.png" class="choose_us_img" alt=""/>
          <img v-else src="@/assets/why-choose-us/img2_small.png" class="choose_us_img" alt=""/>
        </div>
        <div class="hr_rotate2"></div>
        <div class="choose_us_sections">
          <img v-if="windowWidth > 1000" src="@/assets/why-choose-us/img3.png" class="choose_us_img" alt=""/>
          <img v-else src="@/assets/why-choose-us/img3_small.png" class="choose_us_img" alt=""/>
          <div class="choose_us_parts">
            <h1 class="choose_us_parts_heading">Professionalism and Flexibility</h1>
            <p class="choose_us_parts_desc">We approach each wedding with professionalism and adaptability, ensuring we
              seamlessly integrate into your special day. We work closely with you, your photographer, and wedding
              planner to create a smooth and enjoyable experience.</p>
          </div>
        </div>
        <div class="hr_rotate1"></div>
        <div class="choose_us_sections_img_bottom">
          <div class="choose_us_parts">
            <h1 class="choose_us_parts_heading">Creative Outputs</h1>
            <p class="choose_us_parts_desc">We go beyond just capturing aerial footage. We create beautifully edited
              videos and stunning photo albums that preserve your memories and allow you to relive your wedding day for
              years to come.</p>
          </div>
          <img v-if="windowWidth > 1000" src="@/assets/why-choose-us/img4.png" class="choose_us_img" alt=""/>
          <img v-else src="@/assets/why-choose-us/img4_small.png" class="choose_us_img" alt=""/>
        </div>
        <div class="hr_rotate2"></div>
        <div class="choose_us_sections">
          <img v-if="windowWidth > 1000" src="@/assets/why-choose-us/img5.png" class="choose_us_img" alt=""/>
          <img v-else src="@/assets/why-choose-us/img5_small.png" class="choose_us_img" alt=""/>
          <div class="choose_us_parts">
            <h1 class="choose_us_parts_heading">Attention to Detail</h1>
            <p class="choose_us_parts_desc">We understand that weddings are filled with precious moments. We pay
              attention to every detail, ensuring we capture the special moments, emotions, and unique elements that
              make your wedding unique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyChooseUs",

  data() {
    return {
      windowWidth: window.innerWidth
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style>

.hr_rotate1 {
  width: 100%;
  height: 6px;
  position: relative;
  z-index: -1;
  transform: rotate(33deg);
  background: var(--background_linear);
  margin: 8% auto 3%;
}

.hr_rotate2 {
  width: 100%;
  height: 6px;
  position: relative;
  z-index: -1;
  transform: rotate(327deg);
  background: var(--background_linear);
  margin: 8% auto 3%;
}

.choose_us {
  padding: 0 4% 6% 4%;
}

.choose_us_heading {
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
}

.choose_us_desc {
  height: 112px;
  flex-shrink: 0;
  text-align: center;
  font-family: Kaisei Decol, serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 177.8%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;
}

.choose_us_parts {
  width: 44%;
  height: 562px;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
}

.choose_us_sections, .choose_us_sections_img_bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 4%;
}

.choose_us_parts_heading {
  font-family: 'Fira Sans', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 145.8%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.choose_us_parts_desc {
  text-align: center;
  font-family: Kaisei Decol, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.8%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 1200px) {
  .choose_us_img {
    width: 40%;
    height: 40%;
  }

  .choose_us_parts {
    height: 100%;
  }

  .choose_us_parts_desc {
    font-size: 25px;
    line-height: 133.8%;
  }

  .choose_us_parts_heading {
    font-size: 37px;
  }

  .choose_us_sections, .choose_us_sections_img_bottom {
    justify-content: unset;
    gap: 16%;
  }
}

@media (max-width: 1000px) {

  .hr_rotate1, .hr_rotate2 {
    display: none;
  }

  .choose_us_sections {
    flex-direction: column;
    align-items: center;
  }

  .choose_us_sections_img_bottom {
    flex-direction: column-reverse;
    align-items: center;
  }

  .choose_us_img{
    width: 70%;
  }

  .choose_us_parts{
    width: 70%;
  }

  .choose_us_desc{
    height: unset;
    line-height: unset;
    font-size: 22px;
  }

  .choose_us_parts_heading{
    font-size: 33px;
    text-align: center;
  }

  .choose_us_parts_desc{
    font-size: 22px;
  }
}

@media (max-width: 570px) {
  .choose_us_img{
    width: 100%;
  }

  .choose_us_parts{
    width: 100%;
  }
}
@media (max-width: 470px) {
  .choose_us_parts_heading{
    font-size: 30px;
  }

  .choose_us_parts_desc{
    font-size: 19px;
  }
}

</style>
