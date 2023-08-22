<template>
  <div class="drones_content">
    <div class="drone_part1">
      <h1 class="avata_drone_heading">DJI Avata</h1>
      <div class="drone_btn">
        <h4 class="learn_more_btn">Learn More</h4>
        <h4 class="contact_us_btn">Contact Us</h4>
      </div>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
    <div class="drone_part2">
      <h1 class="avata_drone_heading">DJI Mavic 3 Enterprice ATK</h1>
      <div class="drone_btn">
        <h4 class="learn_more_btn">Learn More</h4>
        <h4 class="contact_us_btn">Contact Us</h4>
      </div>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
    <div class="drone_part3">
      <h1 class="avata_drone_heading">DJI Mavic 3 Enterprice M ATK</h1>
      <div class="drone_btn">
        <h4 class="learn_more_btn">Learn More</h4>
        <h4 class="contact_us_btn">Contact Us</h4>
      </div>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
    <div class="drone_part4">
      <h1 class="avata_drone_heading">DJI Mini 3 Pro</h1>
      <div class="drone_btn">
        <h4 class="learn_more_btn">Learn More</h4>
        <h4 class="contact_us_btn">Contact Us</h4>
      </div>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DronePart'
}
</script>

<style>
.drone_part1 {
  background-image: url("../../../assets/drone1.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 46%;
  padding-top: 1%;
}

.drone_part2 {
  background-image: url("../../../assets/drone2.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 46%;
  padding-top: 1%;
}

.drone_part3 {
  background-image: url("../../../assets/drone3.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 46%;
  padding-top: 1%;
}

.drone_part4 {
  background-image: url("../../../assets/drone4.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 46%;
  padding-top: 1%;
}

.drones_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 55px;
  padding: 4% 2% 4% 2%;
  text-align: center;
}

.avata_drone_heading {
  font-family: Inter, serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 163.023%;
  margin: 0;
}

.drone_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
}

.learn_more_btn, .contact_us_btn {
  font-family: Inter, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 163.023%;
  background: linear-gradient(135deg, #000FFF 0%, #1A6C8D 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.drone_focus {
  font-family: Inter, serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 163.023%;
  background: linear-gradient(135deg, #333 0%, #282626 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>