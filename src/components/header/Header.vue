<template>
  <div class="header_content">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <div>
          <router-link to="/"><img class="header_logo" src="../../assets/logo.svg" alt=""/></router-link>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle v-b-toggle.sidebar-right target="nav-collapse"></b-navbar-toggle>

      <b-sidebar id="sidebar-right" width="100%" right shadow no-header #default="{ hide }">
        <div class="px-3 py-2" style="background: var(--background_linear); height: 100%;">
          <div>
            <svg @click="hide" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                 viewBox="0 0 24 24"
                 style="fill: var(--color_white); margin: 1%">
              <path
                  d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
          </div>
          <div style="text-align: center">
            <img src="../../assets/logo.svg" alt="">
            <div class="sidebar_items">
              <router-link to="/"><span style="font-size: 35px">Home</span></router-link>
              <div class="dropdown">
                <span class="dropbtn">Service</span>
                <div class="dropdown-content">
                  <img class="arrow_img" width="24" height="24"
                       src="https://img.icons8.com/material-rounded/24/f1f1f1/give-way.png" alt="give-way"/>
                  <router-link to="/agriculture">Agriculture</router-link>
                  <router-link to="/construction">Construction</router-link>
                  <router-link to="/inspections">Inspections</router-link>
                  <router-link to="/landscape">Landscape</router-link>
                  <router-link to="/real-estate">Real-Estate</router-link>
                  <router-link to="/special">Special Projects</router-link>
                  <router-link to="/weddings">Weddings</router-link>
                </div>
              </div>
              <router-link to="/about"><span style="font-size: 35px">About Us</span></router-link>
              <router-link to="/contact"><span style="font-size: 35px">Contact</span></router-link>
            </div>
            <div class="certified">
              <a href="https://www.faa.gov/uas/commercial_operators" target="_blank">
                <img style="margin-top: 10%" class="certified_logo"
                     src="../../assets/certified.png"
                     alt=""/>
              </a>
            </div>
          </div>
        </div>
      </b-sidebar>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div class="header_items">
            <router-link to="/"><span>Home</span></router-link>
            <b-nav-item href="#">
              <div class="dropdown">
                <span class="dropbtn">Service</span>
                <div class="dropdown-content">
                  <img class="arrow_img" width="24" height="24"
                       src="https://img.icons8.com/material-rounded/24/f1f1f1/give-way.png" alt="give-way"/>
                  <router-link to="/agriculture">Agriculture</router-link>
                  <router-link to="/construction">Construction</router-link>
                  <router-link to="/inspections">Inspections</router-link>
                  <router-link to="/landscape">Landscape</router-link>
                  <router-link to="/real-estate">Real-Estate</router-link>
                  <router-link to="/special">Special Projects</router-link>
                  <router-link to="/weddings">Weddings</router-link>
                </div>
              </div>
            </b-nav-item>
            <router-link to="/about"><span>About Us</span></router-link>
            <router-link to="/contact"><span>Contact</span></router-link>
            <div class="certified">
              <a href="https://www.faa.gov/uas/commercial_operators" target="_blank">
                <img class="certified_logo"
                     src="../../assets/certified.png"
                     alt=""/>
              </a>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
}
</script>

<style scoped>

.certified_logo {
  cursor: pointer;
}

.arrow_img {
  position: absolute;
  top: -4%;
  transform: rotate(58deg);
  left: 4%;
  z-index: -1;
}

.sidebar_items {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  padding-bottom: 5%;
  font-size: 35px;
  padding-top: 5%;
}

.sidebar_items > a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: var(--color_white);
  bottom: -20%;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.sidebar_items > a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.dropbtn {
  color: var(--color_white);
  padding: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 190px;
  box-shadow: var(--shadow_16);
  z-index: 1;
  margin-top: 20%;
  margin-left: 20%;
  width: 250px;
  border-radius: 10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 30px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #2196F3;
  color: var(--color_white);
}

.dropdown-content a:last-child:hover {
  border-radius: 0 0 10px 10px;
}

.dropdown-content a:nth-child(2):hover {
  border-radius: 10px 10px 0 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.bg-info {
  background-color: unset !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

.navbar-collapse {
  flex-grow: unset !important;
}

.header_items, a {
  position: relative;
  color: var(--color_white);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 130px;
  text-decoration: none;
  flex-wrap: wrap;
  transition: background-size 350ms;
}

.header_items > a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: var(--color_white);
  bottom: -20%;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.header_items > a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

@media (max-width: 1600px) {
  .header_items {
    gap: 30px;
  }
}

@media (max-width: 991px) {
  .header_items {
    display: flex;
    justify-content: center;
    padding-top: 4%;
  }

  .arrow_img {
    left: 42%;
  }

  .dropdown-content {
    margin-left: -30%;
  }
}
</style>