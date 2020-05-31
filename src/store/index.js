import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'
Vue.use(Vuex) // install plugin

export default new Vuex.Store({
  state: sourceData
})
