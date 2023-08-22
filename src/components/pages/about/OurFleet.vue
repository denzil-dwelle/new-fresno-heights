<template>
  <div class="fleet-wrapper">
    <div class="our_fleet">
      <h1 class="our_fleet_heading">Our Fleet</h1>
      <div>
        <div class="fleet_section">
          <img class="fleet_drone_img small_img" src="../../../assets/drones/avata.png" alt=""/>
          <div class="fleets">
            <h2 class="fleet_heading">DJI Avata</h2>
            <p class="fleet_desc">A super tool for doing
              indoor Real Estate videographic walkthroughs at amazing angle and camera steadiness. Specifications: <a
                  href="https://www.dji.com/avata/specs" target="_blank">https://www.dji.com/avata/specs</a>
            </p>
          </div>
        </div>

        <div class="fleet_section_bottom_img">
          <div class="fleets">
            <h2 class="fleet_heading">DJI Mavic 3 Enterprice M ATK</h2>
            <p class="fleet_desc">The ultimate multispectral drone for capturing agricultural crop issues in different
              forms of light; also used for infrared roof inspections. Specifications: <a
                  href="https://ag.dji.com/mavic-3-m/specs" target="_blank">https://ag.dji.com/mavic-3-m/specs</a>
            </p>
          </div>
          <img class="fleet_drone_img" src="../../../assets/drones/mavic.png" alt=""/>
        </div>

        <div class="fleet_section">
          <img class="fleet_drone_img" src="../../../assets/drones/mavic3.png" alt=""/>
          <div class="fleets">
            <h2 class="fleet_heading">DJI Mavic 3 Enterprice ATK</h2>
            <p class="fleet_desc">Our workhorse for Photogrammetry and modeling both 3D and 2D within 1 centimeter
              accuracy.
              Specifications: <a href="https://enterprise.dji.com/mavic-3-enterprise/specs" target="_blank">https://enterprise.dji.com/mavic-3-enterprise/specs</a>
            </p>
          </div>
        </div>

        <div class="fleet_section_bottom_img">
          <div class="fleets">
            <h2 class="fleet_heading">DJI Mini 3 Pro</h2>
            <p class="fleet_desc">The utility drone we use for Weddings, external Real Estate shots, and general purpose
              aerial photography
              Specifications: <a href="https://www.dji.com/mini-3-pro/specs" target="_blank">https://www.dji.com/mini-3-pro/specs</a>
            </p>
          </div>
          <img class="fleet_drone_img" src="../../../assets/drones/mini.png" alt=""/>
        </div>

      </div>
    </div>
    <ContactPart/>
  </div>
</template>

<script>
import ContactPart from "@/components/contact/Contact.vue";

export default {
  name: 'OurFleet',
  components: {ContactPart}
}
</script>

<style>
.our_fleet {
  padding: 4%;
}

.fleet_section, .fleet_section_bottom_img {
  background: var(--background_linear_light);
  display: flex;
  justify-content: space-between;
  padding: 5% 8% 0 7%;
  margin-bottom: 3%;
}

.fleets {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.our_fleet_heading {
  font-family: 'Fira Sans',serif;
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding-bottom: 2%;
}

.fleet_heading {
  color: var(--color_white);
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 163.023%;
}

.fleet_desc, .fleet_desc > a {
  width: 600px;
  color: var(--color_white);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 163.023%;
  text-decoration: none;
}

@media (max-width: 1630px) {
  .fleet_section, .fleet_section_bottom_img {
    padding: 5% 3% 0 4%;
    width: 100%;
  }

  .fleet_drone_img {
    width: 50%;
  }

  .fleet_heading {
    font-size: 48px;
  }
}

@media (max-width: 1360px) {
  .fleet_section {
    flex-direction: column;
  }

  .fleet_section_bottom_img {
    flex-direction: column-reverse;
  }

  .fleet_drone_img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .fleets {
    margin-top: -5%;
    padding-bottom: 3%;
  }

  .small_img {
    width: 32%;
  }
}

@media (max-width: 720px) {
  .our_fleet_heading {
    font-size: 70px;
  }

  .fleet_heading {
    font-size: 40px;
  }

  .fleet_desc {
    font-size: 21px;
    width: unset;
  }

  .fleets {
    text-align: center;
  }
}

@media (max-width: 550px) {
  .our_fleet_heading {
    font-size: 55px;
  }

  .fleet_heading {
    font-size: 33px;
  }

  .fleet_desc {
    font-size: 17px;
  }
}

</style>
