<template>
  <div class="drones_content">
    <div :class="['drone_part1', windowWidth > 920 ? 'big_drones_1' : 'small_drones_1']">
      <h1 class="avata_drone_heading">DJI Avata</h1>
      <h4 class="learn_more_btn"><a href="https://www.dji.com/avata/specs" target="_blank">Learn More</a></h4>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
    <div :class="['drone_part2', windowWidth > 920 ? 'big_drones_2' : 'small_drones_2']">
      <h1 class="avata_drone_heading">DJI Mavic 3 Enterprice ATK</h1>
      <h4 class="learn_more_btn"><a href="https://enterprise.dji.com/mavic-3-enterprise/specs" target="_blank">Learn
        More</a></h4>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
    <div :class="['drone_part3', windowWidth > 920 ? 'big_drones_3' : 'small_drones_3']">
      <h1 class="avata_drone_heading">DJI Mavic 3 Enterprice M ATK</h1>
      <h4 class="learn_more_btn"><a href="https://enterprise.dji.com/mavic-3-enterprise/specs" target="_blank">Learn
        More</a></h4>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
    <div :class="['drone_part4', windowWidth > 920 ? 'big_drones_4' : 'small_drones_4']">
      <h1 class="avata_drone_heading">DJI Mini 3 Pro</h1>
      <h4 class="learn_more_btn"><a href="https://enterprise.dji.com/mavic-3-enterprise/specs" target="_blank">Learn
        More</a></h4>
      <h5 class="drone_focus">Inspiration in Focus</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DronePart',

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
.drone_part1 {
  background-repeat: no-repeat;
  height: 780px;
  width: 870px;
  padding-top: 1%;
}

.big_drones_1 {
  background-image: url("../../../assets/drones/drone1.png");
}

.small_drones_1 {
  background-image: url("../../../assets/drones/drone1_small.png");
  height: 355px;
  width: 400px;
}

.drone_part2 {
  background-image: url("../../../assets/drones/drone2.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 870px;
  padding-top: 1%;
}

.big_drones_2 {
  background-image: url("../../../assets/drones/drone2.png");
}

.small_drones_2 {
  background-image: url("../../../assets/drones/drone2_small.png");
  height: 355px;
  width: 400px;
}

.drone_part3 {
  background-image: url("../../../assets/drones/drone3.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 870px;
  padding-top: 1%;
}

.big_drones_3 {
  background-image: url("../../../assets/drones/drone3.png");
}

.small_drones_3 {
  background-image: url("../../../assets/drones/drone3_small.png");
  height: 355px;
  width: 400px;
}

.drone_part4 {
  background-image: url("../../../assets/drones/drone4.png");
  background-repeat: no-repeat;
  height: 780px;
  width: 870px;
  padding-top: 1%;
}

.big_drones_4 {
  background-image: url("../../../assets/drones/drone4.png");
}

.small_drones_4 {
  background-image: url("../../../assets/drones/drone4_small.png");
  height: 355px;
  width: 400px;
}

.drones_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 33px;
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

.learn_more_btn {
  font-family: Inter, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 163.023%;
  background: var(--background_linear);
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
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 920px) {
  .avata_drone_heading {
    font-size: 25px;
    line-height: unset;
  }

  .learn_more_btn {
    font-size: 21px;
    line-height: unset;
  }

  .drone_focus {
    font-size: 21px;
    line-height: unset;
  }
}
</style>