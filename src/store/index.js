import Vue from 'vue'
import Vuex from 'vuex'

import tours from './tours'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tours
    }
})