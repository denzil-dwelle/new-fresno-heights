<template>
  <div class="contact">
    <div class="contact_content">
      <div class="contact_form">
        <h2 class="contact_heading">Contact Us</h2>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="contact_form_inputs">
            <div class="inputs">
              <div>
                <input placeholder="Name" type="text" name="user_name" autocomplete="false"
                       v-bind:class="{ 'is-valid': validation.valid.firstName, 'is-invalid': validation.invalid.firstName }"
                       v-on:focus="clearValidation('firstName')" v-model="firstName"/>

                <div class="valid-feedback" v-if="validation.valid.firstName">{{ validation.valid.firstName }}</div>
                <div class="invalid-feedback" v-if="validation.invalid.firstName">{{ validation.invalid.firstName }}
                </div>
              </div>

              <div>
                <input placeholder="Email" type="email" name="user_email" autocomplete="false"
                       v-bind:class="{ 'is-valid': validation.valid.email, 'is-invalid': validation.invalid.email }"
                       v-on:focus="clearValidation('email')" v-model="email"/>

                <div class="valid-feedback" v-if="validation.valid.email">{{ validation.valid.email }}</div>
                <div class="invalid-feedback" v-if="validation.invalid.email">{{ validation.invalid.email }}</div>
              </div>
            </div>
            <div class="inputs">
              <div>
                <input placeholder="Phone" type="tel" name="user_tel" autocomplete="false"
                       v-bind:class="{ 'is-valid': validation.valid.phone, 'is-invalid': validation.invalid.phone }"
                       v-on:focus="clearValidation('phone')" v-model="phone"/>

                <div class="valid-feedback" v-if="validation.valid.phone">{{ validation.valid.phone }}</div>
                <div class="invalid-feedback" v-if="validation.invalid.phone">{{ validation.invalid.phone }}</div>
              </div>
              <div>
                <input placeholder="Company Name" type="text" name="user_company_name" autocomplete="false"
                       v-bind:class="{ 'is-valid': validation.valid.companyName, 'is-invalid': validation.invalid.companyName }"
                       v-on:focus="clearValidation('companyName')" v-model="companyName"/>

                <div class="valid-feedback" v-if="validation.valid.companyName">{{ validation.valid.companyName }}</div>
                <div class="invalid-feedback" v-if="validation.invalid.companyName">{{ validation.invalid.companyName }}
                </div>
              </div>
            </div>
            <div>
              <textarea placeholder="Message" name="user_message" autocomplete="false"
                        v-bind:class="{ 'is-valid': validation.valid.message, 'is-invalid': validation.invalid.message }"
                        v-on:focus="clearValidation('message')" v-model="message"/>

              <div style="margin-top: 2%" class="valid-feedback" v-if="validation.valid.message">
                {{ validation.valid.message }}
              </div>
              <div style="margin-top: 2%" class="invalid-feedback" v-if="validation.invalid.message">
                {{ validation.invalid.message }}
              </div>
            </div>
          </div>
          <button class="contact_send_message" type="submit" value="Send">Send Message</button>
          <div class="alert alert-success hide" v-if="showSuccessAlert">Sent successfully</div>
        </form>
      </div>
      <div class="contact_content_info">
        <img src="../../assets/logo.svg" alt=""/>
        <div class="contact_us_info">
          <p class="contact_phone">Phone: <span style="text-decoration: underline">559-500-0456</span></p>
          <p class="contact_email">Email: <span style="text-decoration: underline">info@fresnoheights.com</span></p>
          <div class="socials">
            <a href="https://www.instagram.com/fresnoheights/" target="_blank"><img
                src="../../assets/contact-us/instagram.svg" alt=""/></a>
            <a href="https://www.facebook.com/fresnoheights" target="_blank"><img
                src="../../assets/contact-us/facebook.png" alt="" class="facebook_logo"/></a>
            <a href="https://www.youtube.com/channel/UCo3zTcxEsSPDxjjZC7hSFOw" target="_blank"><img
                src="../../assets/contact-us/youtube.svg" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import emailjs from '@emailjs/browser';

export default {
  name: 'ContactPart',

  data() {
    return {
      firstName: '',
      email: '',
      phone: null,
      companyName: '',
      message: '',
      showSuccessAlert: false,

      validation: {
        invalid: {},
        valid: {}
      }
    }
  },

  methods: {

    submitForm() {
      this.showSuccessAlert = true;
      setTimeout(() => {
        this.showSuccessAlert = false;
      }, 7000);
    },

    sendEmail() {
      this.validate()
      if (Object.keys(this.validation.valid).length !== 5) return
      emailjs.sendForm('service_nhnt9mc', 'template_ijldgae', this.$refs.form, 'P5RHzWWB9D9hUTmAq')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });

      this.submitForm()

    },


    validate() {
      this.validation = {
        invalid: {},
        valid: {}
      }

      if (!this.firstName) {
        this.validation.invalid.firstName = 'Please type your name.';
      } else if (this.firstName.length < 2) {
        this.validation.invalid.firstName = 'Name should have min. 2 characters.';
      } else if (!this.firstName.match(/^[a-zA-Z ]+$/)) {
        this.validation.invalid.firstName = 'Name should contains only letters (a-z).';
      } else {
        this.validation.valid.firstName = 'Name is correct.';
      }


      if (!this.email) {
        this.validation.invalid.email = 'Please type your email.';
      } else if (!this.email.match(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)) {
        this.validation.invalid.email = 'Email should contains @.';
      } else {
        this.validation.valid.email = 'Email is correct.';
      }


      if (!this.phone) {
        this.validation.invalid.phone = 'Please type your phone.';
      } else if (this.phone.length < 6) {
        this.validation.invalid.phone = 'Phone should have min. 6 characters.';
      } else if (this.phone.match(/^\d+-\d+$/)) {
        this.validation.invalid.phone = 'Phone should contains only numbers (0-9).';
      } else {
        this.validation.valid.phone = 'Phone is correct.';
      }


      if (!this.companyName) {
        this.validation.invalid.companyName = 'Please type your company name.';
      } else if (this.companyName.length < 2) {
        this.validation.invalid.companyName = 'Company name should have min. 2 characters.';
      } else if (!this.companyName.match(/^[a-zA-Z0-9 ]+$/)) {
        this.validation.invalid.companyName = 'Company name is incorrect.';
      } else {
        this.validation.valid.companyName = 'Company name is correct.';
      }


      if (!this.message) {
        this.validation.invalid.message = 'Please type your message.';
      } else if (this.message.length < 2) {
        this.validation.invalid.message = 'Message should have min. 2 characters.';
      } else if (!this.message.match(/^[\s\S]*$/)) {
        this.validation.invalid.message = 'Message is incorrect.';
      } else {
        this.validation.valid.message = 'Message is correct.';
      }

      this.$forceUpdate();
    },

    clearValidation: function (field) {
      this.validation.valid[field] = '';
      this.validation.invalid[field] = '';
      this.$forceUpdate();
    }
  },
}
</script>

<style>

.alert-success {
  background: #f4f4f4;
  color: #269612;
  border-radius: 4px;
  padding: 10px;
  margin-top: 2%;
  margin-bottom: 3%;
}

.valid-feedback {
  margin-top: 6%;
  color: green;
}

.invalid-feedback {
  margin-top: 6%;
  color: red;
  font-size: 13px;
}

.contact {
  padding: 0 4% 3% 4%;
}

.contact_content {
  height: 700px;
  flex-shrink: 0;
  background: var(--background_linear_black_light);
  box-shadow: var(--shadow_11);
}

.contact_heading {
  font-family: 'Fira Sans', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 145.8%;
  background: var(--background_linear);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact_content_info {
  background: var(--background_linear);
  box-shadow: var(--shadow_11);
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 3%;
}

.contact_content {
  display: flex;
  justify-content: space-between;
}

.contact_phone, .contact_email {
  color: var(--color_white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 145.8%;
}

.inputs {
  display: flex;
  gap: 100px
}

.contact_email {
  padding-top: 4%;
}

.contact_send_message {
  font-family: Kaisei Decol, serif;
  background: var(--background_linear);
  width: 240px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 8%;
  border: none;
  border-radius: 2px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.8%;
  color: var(--color_white);
  box-shadow: var(--shadow_10);
}

.socials {
  text-align: center;
}

.facebook_logo {
  padding-left: 6%;
  padding-right: 7%;
}

.contact_us_info {
  padding-top: 23%;
}

.contact_form {
  padding: 2% 3% 2% 5%;
}


input {
  border: none;
  border-bottom: 2px solid #D4D2D2;
  width: 300px;
  height: 55px;
}

textarea:focus, input:focus {
  outline: none;
}

textarea {
  border: none;
  border-bottom: 2px solid #D4D2D2;
  width: 100%;
  height: 55px;
}

::placeholder {
  font-family: Kaisei Decol, serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.8%;
  background: var(--background_linear_black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact_form_inputs {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding-top: 3%;
}

@media (max-width: 1225px) {
  .contact_content {
    display: inline;
  }

  .contact_content_info {
    height: inherit;
  }
}

@media (max-width: 830px) {
  input {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .contact_form_inputs {
    gap: 40px;
  }

  .inputs {
    flex-direction: column;
    gap: 40px;
  }

  .contact_send_message {
    margin: 20% auto 0;
  }

  .socials {
    margin-top: 15%;
  }

  .contact_content_info {
    padding-bottom: 10%;
    padding-top: 10%;
    height: unset;
  }
}

@media (max-width: 420px) {
  .contact_phone, .contact_email {
    font-size: 23px;
  }
}
</style>