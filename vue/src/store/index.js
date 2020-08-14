import Vue from 'vue';
import Vuex from 'vuex';
import order from './modules/order';
import map from './modules/map'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    order, map
  }
})
