import Vue from 'vue'

Vue.filter('cutText', (value) => {
    return value.length > 200 ? value.slice(0, 200) + ' ...' : value
})