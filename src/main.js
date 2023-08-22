import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import AboutMain from "@/components/pages/about/AboutMain.vue";
import LandingPage from "@/components/landing/LandingPage.vue";
import Contact from "@/components/pages/contact/Contact.vue";
import AgricultureMain from "@/components/sub_items/agriculture/AgricultureMain.vue";
import WeddingsMain from "@/components/sub_items/weddings/WeddingsMain.vue";
import SpecialProjectMain from "@/components/sub_items/special/SpecialProjectMain.vue";
import RealEstateMain from "@/components/sub_items/real-estate/RealEstateMain.vue";
import LandscapeMain from "@/components/sub_items/landscape/LandscapeMain.vue";
import InspectionsMain from "@/components/sub_items/inspections/InspectionsMain.vue";
import ConstructionMain from "@/components/sub_items/construction/ConstructionMain.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueGtag from "vue-gtag"
import VueRouter from 'vue-router';
import SwiperClass, { /* swiper modules... */} from 'swiper'
import { createStore } from 'vuex'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
SwiperClass.use([/* swiper modules... */])


const routes = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/about',
        component: AboutMain
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/agriculture',
        component: AgricultureMain
    },
    {
        path: '/inspections',
        component: InspectionsMain
    },
    {
        path: '/construction',
        component: ConstructionMain
    },
    {
        path: '/landscape',
        component: LandscapeMain
    },
    {
        path: '/real-estate',
        component: RealEstateMain
    },
    {
        path: '/special',
        component: SpecialProjectMain
    },
    {
        path: '/weddings',
        component: WeddingsMain
    },
]

const router = new VueRouter
({
    mode: 'history',
    routes
})


const store = createStore({})

Vue.use(VueGtag, {
    config: {
        id: 'G-GW6MEK91Y4',
        params: {
            send_page_view: true
        }
    }
}, router)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


