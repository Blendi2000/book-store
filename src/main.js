import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'popper.js'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import './assets/app.scss'
import {fb} from './firebase';
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)


Vue.config.productionTip = false
Vue.component('Navbar', require('./components/Navbar.vue').default);

let app='';
fb.auth().onAuthStateChanged(function(user){

    if(!app){
      new Vue({
        router,
        render: h => h(App)
      }).$mount('#app')
      
    }


});


