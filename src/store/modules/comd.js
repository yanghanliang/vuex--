const comc = {
  // 命名空间
  namespaced: true,
  state: {
    name: 'lisi',
    age: 20
  },
  mutations: {
    setAge(state, payload) {
      state.age = payload.age
    }
  },
  actions: {
    // 对参数进行解构
    // setAge({ commit }, payload) {
    //   setTimeout(() => {
    //   }, 2000)
    // }
    setAge( context, payload ) {
      console.log(context)
      setTimeout(() => {
        context.commit({
          type: 'setAge',
          age: payload.age
        })
      }, 2000)
    }
  }
}

export default comc
// 解构赋值
//   function test(obj) {
//     console.log(obj.name)
//   }

//   test()

// function test({ name }) {
//   console.log(name)
// }

// test(obj)
