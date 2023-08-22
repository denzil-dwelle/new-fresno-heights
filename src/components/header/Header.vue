<template>
  <div class="header_content">
    <div>
      <img class="header_logo" src="../../assets/logo.svg" alt=""/>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="header">
          <div class="header_items">
            <div class="texts">
              <img src="../../assets/hr.svg" alt=""/>
              <span>Services</span>
            </div>
            <div class="texts">
              <img src="../../assets/hr.svg" alt=""/>
              <span>About Us</span>
            </div>

            <div class="texts">
              <img src="../../assets/hr.svg" alt=""/>
              <span>F. A. Q.</span>
            </div>

            <div class="texts">
              <img src="../../assets/hr.svg" alt=""/>
              <span>Contact</span>
            </div>
            <img class="certified_logo" src="../../assets/certified.png" alt=""/>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>

.header_content {
  display: flex;
  justify-content: space-between;
}

.header_items {
  color: #FFF;
  font-family: Jockey One, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 130px;
}

.texts {
  display: flex;
  flex-direction: column-reverse;
  gap: 3px;
}
</style>