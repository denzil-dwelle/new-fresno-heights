<template>
  <div class="footer">
    <div class="footer_content">
      <img src="../../assets/logo.svg" alt=""/>
      <div class="footer_items">
        <span><router-link to="/">Home</router-link></span>
        <span><router-link to="/agriculture">Services</router-link></span>
         <span><router-link to="/about">About Us</router-link></span>
        <span><router-link to="/contact">Contact</router-link></span>
      </div>
      <div class="contact_info">
        <p class="phone">Phone: 559-500-0456</p>
        <p class="email">Email: info@fresnoheights.com</p>
        <div class="socials">
          <a href="https://www.instagram.com/fresnoheights/" target="_blank"><img src="../../assets/social/Instagram.svg" alt=""/></a>
          <a href="https://www.facebook.com/fresnoheights" target="_blank"><img src="../../assets/social/Facebook.png" alt="" class="facebook_logo"/></a>
          <a href="https://www.youtube.com/channel/UCo3zTcxEsSPDxjjZC7hSFOw" target="_blank"><img src="../../assets/social/Youtube.png" alt=""/></a>
        </div>
      </div>
    </div>
    <img src="../../assets/hr-img.svg" alt="" class="hr_img"/>
    <div class="footer_info">
      <p class="info_text">© 2023 Fresno Heights Drone Services. All rights reserved.</p>
      <div class="privacy_terms">
        <p class="footer_privacy"><a href="https://www.fresnoheights.com/extras/documents/Privacy-Policy.pdf" target="_blank">Privacy Policy</a></p> | <p class="footer_terms"><a href="https://www.fresnoheights.com/extras/documents/Terms-of-Use.pdf" target="_blank">Terms of Use</a></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterPart'
}
</script>

<style>

.footer {
  flex-shrink: 0;
  background: var(--background_linear_black);
  box-shadow: var(--shadow_11);
}

.footer_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 4% 0 4%;
}

.footer_items, .footer_items > span > a {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 100px;
  cursor: pointer;
  text-decoration: none;
}

.phone, .email {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 145.8%;
}

.socials {
  text-align: center;
}

.facebook_logo {
  padding-left: 6%;
  padding-right: 7%;
}

.hr_img {
  width: 100%;
  padding-top: 2%;
}

.info_text {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 145.8%;
  margin: 0;
}

.footer_privacy > a, .footer_terms > a{
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 145.8%;
  text-decoration: none;
}

.privacy_terms {
  display: flex;
  color: var(--color_white);
  justify-content: center;
  gap: 10px;
}

.footer_info {
  text-align: center;
  padding-top: 1%;
}

@media (max-width: 1490px) {
  .footer_items{
    gap: 40px;
  }
}

@media (max-width: 1160px) {
  .contact_info{
    margin: 0 auto;
    padding-top: 6%;
  }

  .footer_content{
    flex-wrap: wrap;
  }
}

@media (max-width: 686px) {
  .footer_content{
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 26px;
    padding: 6% 4% 0 4%;
  }

  .contact_info{
    padding-top: 0;
  }
}

@media (max-width: 420px) {
  .phone, .email {
    font-size: 23px;
  }

  .footer_items{
    gap: 25px;
    flex-wrap: wrap;
    padding: 0 5% 0 5%;
    justify-content: center;
  }
}
</style>