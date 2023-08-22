<template>
  <div class="content">
    <PageHeader/>

    <div>
      <div>
        <h2>Captivating Drone Photography</h2>
        <h4>Stunning aerial images which have impact that delivers</h4>
        <p>
          Welcome to Fresno Heights Drone Services, a company dedicated to delivering exceptional value for your aerial projects.
          We recognize the transformative power of perspective. Our team of skilled drone pilots and post-processing editors are committed to achieving remarkable results that will leave you amazed. We go above and beyond to surpass your expectations by combining artistic vision, technical expertise, and meticulous attention to detail.
          We appreciate your interest in Fresno Heights Drone Services and the opportunity to collaborate on extraordinary projects with you.
        </p>
        <button>Our Fleet</button>
      </div>
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/header/Header.vue";

export default {
  name: 'ContentPart',
  components: {PageHeader}
}
</script>

<style>

.content {
  background: linear-gradient(135deg, #000FFF 0%, #55CAFA 100%);
  height: 500px;
  padding: 2% 4%;
}

</style>