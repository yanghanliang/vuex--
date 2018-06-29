import Vue from 'vue'
import Vuex from 'vuex'
import { SETCOUNT, SETNUM } from '@/store/mutation_types'
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
    [SETCOUNT](state) {
      state.count++
    },
    // payload 载荷
    [SETNUM](state, payload) {
      console.log(payload)
      state.count += payload.num
    }
  },
  actions: {
    increate(context, payload) {
      // context 中包含了 state getters mutations
      console.log(context)

      context.commit({
        type: SETNUM,
        num: payload.num
      })
      // 常用 --> 在 action 中进行异步操作
      // 异步操作结束之后, 在调用 mutation 对 state 重新赋值
      // setTimeout(() => {
      //   context.commit({
      //     type: SETNUM,
      //     num: 5
      //   })
      // }, 2000)
    }
  }
})

// 导出仓库
export default store
