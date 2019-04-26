// 入口js

import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    el:'#app',
    render:c=>c(App),
    router
})

Vue.config.devtools = true