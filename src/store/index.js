import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex)

// 创建仓库
const store = new Vuex.Store({
  // 状态
  state: {
    count: 0,
    msg: 'Hello Vuex'
  },
  // 相当于计算属性
  getters: {

  },
  // 改变状态值
  mutations: {

  }
})

// 导出仓库
export default store