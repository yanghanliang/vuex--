import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // 状态
  state: {
    count: 0,
    msg: 'Hello Vuex'
  },
  // 相当于计算属性, 用于处理事件
  getters: {
    msg(state) { // 别忘了传参
      return state.msg.split('').reverse().join('')
    }
  },
  // state getters 用于在视图中展示(处理后的)状态
  // 改变状态值
  // 不能进行异步调用
  mutations: {
    setCount(state) {
      state.count++
    },
    // payload 载荷
    setNum(state, payload) {
      console.log(payload)
      state.count += payload.num
    }
  }
})

// 导出仓库
export default store
