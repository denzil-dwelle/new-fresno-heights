<template>
  <div class="analysis_content">
    <h1 class="analysis_heading">Light Spectrum Analysis Types</h1>
    <div>
      <div class="drones_analysis">
        <img src="../../../assets/analysis/RGB.png" alt="" class="drones_analysis_img"/>
        <div class="drones_info" style="padding-left: 0">
          <h1 class="drones-name">Normal Light (RGB):</h1>
          <p class="drones_desc">Good for inspecting plant crowding and invasive species identification.</p>
        </div>
      </div>

      <div class="drones_analysis_img_bottom">
        <div class="drones_info">
          <h1 class="drones-name" style="width: 78%">Normalized Difference Vegetation Index (NDVI):</h1>
          <p class="drones_desc">This index measures the chlorophyll content in vegetation, indicating growth and
            nutrient levels. Good for overall health analysis of the crop.</p>
        </div>
        <img src="../../../assets/analysis/NDVI.png" alt="" class="drones_analysis_img"/>
      </div>

      <div class="drones_analysis">
        <img src="../../../assets/analysis/GNDVI.png" alt="" class="drones_analysis_img"/>
        <div class="drones_info">
          <h1 class="drones-name" style="margin-left: 3%;">Green Normalized Difference Vegetation Index (GNDVI):</h1>
          <p class="drones_desc">Measures canopy coverage and indicates whether plants are experiencing water shortage,
            nutrient deficiency, or disease. Used in conjunction with NDVI to get an overall sense of health.</p>
        </div>
      </div>

      <div class="drones_analysis_img_bottom">
        <div class="drones_info">
          <h1 class="drones-name" style="width: 69%">Normalized Difference Red Edge (NDRE):</h1>
          <p class="drones_desc">Measures chlorophyll and sugar content in plants.</p>
        </div>
        <img src="../../../assets/analysis/NDRE.png" alt="" class="drones_analysis_img"/>
      </div>

      <div class="drones_analysis">
        <img src="../../../assets/analysis/LCI.png" alt="" class="drones_analysis_img"/>
        <div class="drones_info" style="padding-left: 5%;">
          <h1 class="drones-name">Leaf Chlorophyll Index (LCI):</h1>
          <p class="drones_desc"> Measures leaf chlorophyll content and is used for evaluating vegetation growth and
            yield. It can also identify nutrient stress, disease, and aging in plants.</p>
        </div>
      </div>

      <div class="drones_analysis_img_bottom">
        <div class="drones_info">
          <h1 class="drones-name" style="margin-left: 10%">Optimized Soil-Adjusted Vegetation Index (OSAVI):</h1>
          <p class="drones_desc"> This is a modification of the Normalized Difference Vegetation Index (NDVI) and is
            designed to reduce the impact of soil background on vegetation assessment, making it particularly useful for
            areas with varying soil properties.</p>
        </div>
        <img src="../../../assets/analysis/OSAVI.png" alt="" class="drones_analysis_img"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalysisTypes'
}
</script>

<style>
.analysis_content {
  padding: 0 4% 4%;
}

.analysis_heading {
  font-family: 'Fira Sans', sans-serif;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.drones-name {
  font-family: 'Fira Sans', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.drones_desc {
  width: 80%;
  text-align: center;
  font-family: Kaisei Decol, serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: var(--background_linear_black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.drones_analysis, .drones_analysis_img_bottom {
  display: flex;
  border-radius: 5px;
  background: var(--bg_white);
  box-shadow: var(--shadow_61);
  margin-top: 4%;
}

.drones_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
}

@media (max-width: 1740px) {

  .drones-name{
    font-size: 43px;
    text-align: center;
  }

  .drones_desc{
    font-size: 32px;
  }

  .drones_info{
    padding-left: 1%;
    padding-right: 1%;
  }
}

@media (max-width: 1321px) {
  .drones_analysis_img_bottom{
    display: flex;
    flex-direction: column-reverse;
  }
}

@media (max-width: 1320px) {

  .drones_analysis{
    display: inherit;
  }

  .drones_analysis_img{
    width: 100%;
  }

  .drones_info{
    padding: 4%;
  }
}

@media (max-width: 1120px) {
  .analysis_heading{
    font-size: 60px;
  }
}

@media (max-width: 700px) {

  .drones-name {
    font-size: 35px;
  }

  .drones_desc {
    font-size: 25px;
  }

  .analysis_heading{
    font-size: 50px;
  }
}

@media (max-width: 470px) {

  .drones-name {
    font-size: 29px;
  }

  .drones_desc {
    font-size: 21px;
  }
}

@media (max-width: 390px) {
  .drones_desc{
    font-size: 15px;
  }

  .drones-name{
    font-size: 26px;
  }

  .analysis_heading{
    font-size: 38px;
    margin-top: 10%;
  }
}
</style>