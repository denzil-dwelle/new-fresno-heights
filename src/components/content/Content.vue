<template>
  <div class="content_wrapper">
    <PageHeader/>
    <div class="content_header">
      <div class="content_header_inner">
        <h2 class="content_heading">Captivating Drone Photography</h2>
        <h4 class="content_heading2">Stunning aerial images which have impact that delivers</h4>
        <p class="content_desc">
          Welcome to Fresno Heights Drone Services, a company dedicated to delivering exceptional value for your aerial
          projects.
          We recognize the transformative power of perspective. Our team of skilled drone pilots and post-processing
          editors are committed to achieving remarkable results that will leave you amazed. We go above and beyond to
          surpass your expectations by combining artistic vision, technical expertise, and meticulous attention to
          detail.
          We appreciate your interest in Fresno Heights Drone Services and the opportunity to collaborate on
          extraordinary projects with you.
        </p>
      </div>
      <VueSlickCarousel autoplay infinite :arrows="true">
        <div>
          <img
              class="d-block img-fluid"
              src="@/assets/drones/avata.png"
              alt="image"
          >
        </div>
        <div>
          <img
              class="d-block img-fluid"
              src="@/assets/drones/mavic.png"
              alt="image"
          >
        </div>
        <div>
          <img
              class="d-block img-fluid"
              src="@/assets/drones/mavic3.png"
              alt="image"
          >
        </div>
        <div>
          <img
              class="d-block img-fluid"
              src="@/assets/drones/mini.png"
              alt="image"
          >
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import PageHeader from "@/components/header/Header.vue";
import {Navigation} from "swiper/modules";
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'ContentPart',
  components: {
    PageHeader,
    VueSlickCarousel
  },

  data() {
    return {
      modules: [Navigation]
    }
  },

}
</script>

<style>
.content_wrapper {
  background: var(--background_linear);
  height: 100%;
  padding: 2% 4%;
}

.content_header {
  padding-top: 4%;
  display: flex;
  gap: 5%;
}

.content_header_inner {
  width: 70%;
}

.content_heading {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.content_heading2 {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: 132.023%;
}

.content_desc {
  color: var(--color_white);
  font-family: Kaisei Decol, serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 163.023%;
  width: 100%;
}

.slick-slider {
  width: 30% !important;
}

.mySwiper {
  overflow: hidden;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  object-fit: cover;
  display: block;
}

.swiper-button-next, .swiper-button-prev {
  color: var(--color_white) !important;
}

.swiper-button-prev, .swiper-rtl {
  left: unset !important;
  right: unset !important;
}

@media (max-width: 1530px) {
  .content_heading {
    font-size: 55px;
  }

  .content_heading2 {
    font-size: 35px;
  }
}

@media (max-width: 1190px) {
  .content_header {
    flex-direction: column;
    align-items: center;
  }

  .content_header_inner {
    width: 100%;
  }

  .slick-slider {
    width: 45% !important;
  }
}

@media (max-width: 790px) {
  .content_heading2 {
    font-size: 30px;
    margin-bottom: 4%;
  }

  .content_heading {
    font-size: 45px;
  }
}

@media (max-width: 665px) {
  .content_heading {
    font-size: 40px;
  }

  .content_heading2 {
    font-size: 25px;
  }

  .content_header_inner {
    text-align: center;
  }
}

@media (max-width: 520px) {
  .content_heading {
    font-size: 33px;
  }

  .content_heading2 {
    font-size: 22px;
  }

  .content_desc {
    font-size: 11px;
  }
}

@media (max-width: 410px) {
  .content_heading {
    font-size: 25px;
  }

  .content_heading2 {
    font-size: 18px;
  }

  .content_desc {
    font-size: 8px;
  }
}

@media (max-width: 385px) {
  .content_heading {
    font-size: 25px;
  }

}
</style>