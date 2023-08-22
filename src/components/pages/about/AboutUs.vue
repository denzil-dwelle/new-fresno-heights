<template>
  <div class="about_us">
    <div class="about_content">
      <h1 class="about_us_heading">About Us</h1>
      <p class="about_us_desc">Our owner, Denzil, is a native of the Central Valley and a veteran. He founded Fresno
        Heights to pursue his passion for photography and remote control aircraft. With over 30 years of experience in
        the business management field, Denzil leverages his knowledge to deliver exceptional value to our customers.
        At Fresno Heights, our drone pilots hold FAA licenses for unmanned flight and possess a thorough understanding
        of conducting aerial operations safely and responsibly.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
}
</script>

<style>

.about_us {
  background-image: url("../../../assets/about_us.png");
  width: 100%;
  height: 100%;
  padding: 4%;
  display: flex;
  justify-content: flex-end;
}

.about_us_heading {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.about_us_desc {
  color: var(--color_white);
  font-family: Kaisei Decol, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 178.8%;
}

.about_content {
  border-radius: 10px;
  background: var(--background_linear);
  width: 58%;
  height: 428px;
  flex-shrink: 0;
  padding: 3%;
}

@media (max-width: 1240px) {
  .about_content {
    width: 100%;
    border-radius: 10px;
    background: var(--background_linear_black_light);
    backdrop-filter: blur(19px);
  }
}

@media (max-width: 720px) {
  .about_us_heading {
    font-size: 70px;
  }
}

@media (max-width: 500px) {
  .about_us_heading {
    font-size: 55px;
  }

  .about_us_desc {
    font-size: 18px;
  }
}


@media (max-width: 420px) {
  .about_us_heading {
    font-size: 30px;
  }

  .about_us_desc {
    line-height: unset;
  }

  .about_us_desc {
    font-size: 17px;
  }
}
</style>