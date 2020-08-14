import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
// import * as Sentry from '@sentry/browser';
// import { Vue as VueIntegration } from '@sentry/integrations';

Vue.config.productionTip = false;

// Sentry.init({
//   dsn: 'https://d235afb37b224b46838dbd875c3f8b2a@o245160.ingest.sentry.io/5315123',
//   integrations: [new VueIntegration({Vue, attachProps: true})],
// });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
