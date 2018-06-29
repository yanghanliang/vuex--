const comc = {
  // 开启命名空间
  namespaced: true,
  state: {
    name: 'zs',
    age: 18
  },
  mutations: {
    setNume(state, payload) {
      state.name = payload.name
    }
  },
  actions: {
    setNume(context, payload) {
      console.log(context)
      // 异步操作
      setTimeout(() => {
        context.commit({
          type: 'setNume',
          name: payload.name
        })
      }, 2000)
    }
  }
}

export default comc
