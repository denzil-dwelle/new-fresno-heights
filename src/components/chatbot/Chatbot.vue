<template>
  <div>
    <img v-click-outside="closeChatbot" @click="openChatbot" width="48" height="48" src="../../assets/FAQ-Logo.png"
         alt="message-bot"
         class="chatbot_icon"/>
    <div class="chatbot" v-show="isChatbotOpen">
      <div class="questions-list">
        <ul>
          <li v-for="question in questions" :key="question.name" @click="getQuestionInfo(question.name)"
              class="questions">
            {{ question.name }}
          </li>
        </ul>
      </div>
      <div class="question-answer">
        <p v-if="selectedQuestionInfo">{{ selectedQuestionInfo }}</p>
        <p v-else>Select a question to see its information.</p>
      </div>
    </div>
  </div>
</template>

<script>

import ClickOutside from 'vue-click-outside'

export default {
  name: 'ChatbotPage',
  data() {
    return {
      questions: [
        {
          name: "Do you have standard packages?",
          info: "We customize our pricing depending on the nature of the work to ensure we are being\n" +
              "              as efficient with your\n" +
              "              budget as possible. On our Services pages we put an average cost so you can get a sense of the scope."
        },
        {
          name: "Do you charge for travel?",
          info: "We build travel time into our pricing so no additional charges for travel in the\n" +
              "              Central Valley."
        },
        {
          name: "What forms of payment do you take?",
          info: "We take Visa/Mastercard/Amex/Discover, Cash, Check, Paypal, Venmo, and Cashapp"
        },
        {
          name: "Why are you so inexpensive?",
          info: "As a startup, we are keeping our costs to operate low - check out the low tech\n" +
              "              website - so that we can pass savings on to our customers."
        }
      ],
      selectedQuestionInfo: null,
      isChatbotOpen: false,
    };
  },

  methods: {

    openChatbot() {
      this.isChatbotOpen = !this.isChatbotOpen
    },

    closeChatbot() {
      this.isChatbotOpen = false
    },

    getQuestionInfo(questionName) {
      const question = this.questions.find((d) => d.name === questionName);
      if (question) {
        this.selectedQuestionInfo = question.info;
      } else {
        this.selectedQuestionInfo = "Drone information not found.";
      }
    },
  },

  mounted() {
    this.popupItem = this.$el
  },

  directives: {
    ClickOutside
  }

};
</script>

<style>

.questions {
  border: 1px solid #2196F3;
  padding: 2%;
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  width: 93%;
  margin-bottom: 3%;
  cursor: pointer;
  list-style: none;
}

.questions:hover {
  background-color: #2196F3;
  color: white;
}

.question-answer {
  font-weight: 500;
  font-size: 16px;
}

.chatbot {
  box-shadow: var(--shadow_16);
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: 16%;
  right: 2%;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background: #F7F7F7;
}

.chatbot_icon {
  position: fixed;
  bottom: 9%;
  right: 1.7%;
  cursor: pointer;
}

@media (max-width: 410px) {
  .chatbot {
    width: 320px;
  }
}
</style>

