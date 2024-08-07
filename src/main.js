import './assets/css/main.scss'
import 'aos/dist/aos.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import HighchartsVue from 'highcharts-vue'

import BootstrapVueNext from 'bootstrap-vue-next'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

import {style} from './helpers/style.js'
import {number} from './helpers/number.js'
import {datetime} from './helpers/datetime.js'

import './plugins/highcharts'

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(createPinia()).use(router).use(HighchartsVue, {tagName: 'charts'}).use(BootstrapVueNext).use(SimpleTypeahead);

app.config.globalProperties.$filters = {
    ...style,
    ...number,
    ...datetime,
}

export const globalsDialog = app.config.globalProperties.$globalDialog = {
    showSessionTimeout : false
}

async function init() {
    app.mount('#app')
}

init()
