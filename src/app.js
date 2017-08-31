import Vue from 'vue'
import App from './App';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});