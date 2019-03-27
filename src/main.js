import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase";
import './registerServiceWorker'

Vue.config.productionTip = false
var config = {
  apiKey: 'AIzaSyCXgKp76z72oB13B7Z0mi-oa7Ywdw9XsBk',
  authDomain: 'cropchat-2417d.firebaseapp.com',
  databaseURL: 'https://cropchat-2417d.firebaseio.com',
  projectId: 'cropchat-2417d',
  storageBucket: 'cropchat-2417d.appspot.com',
  messagingSenderId: '808632160528'
}
firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
// messaging.usePublicVapidKey("xxxxxxxxxxx");

messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  messaging.getToken().then((token) => {
    console.log(token);
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
